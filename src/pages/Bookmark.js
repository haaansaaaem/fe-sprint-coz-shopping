import { useCallback, useEffect, useRef, useState } from 'react';
import Product from '../component/Product'
import DebugComponent from '../util/DebugComponents';
import './main.css'

export default function Main() {

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const bottom = useRef(null);

  useEffect(() => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setCurrentProducts(json.slice(0, 4 * page));
        setIsLoading(false);
      });
  }, [page]);

  const renderNextPage = useCallback(() => {
    setIsLoading(true);
    if (page < 10) {
      setCurrentProducts(products.slice(0, 10 * (page + 1)));
      setPage(page + 1);
    }
    setIsLoading(false);
  }, [page, products]);

  useEffect(() => {
    if (bottom.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log(entries);
            console.log(currentProduct);
            renderNextPage();
          }
        },
        {
          threshold: 1,
        }
      );
      observer.observe(bottom.current);
      return () => observer.disconnect();
    }
  }, [renderNextPage, currentProduct]);

  return (
    <section>
      {currentProduct.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            image_url={product.image_url}
          ></Product>
        );
      })}
      <DebugComponent
        data={{ products, currentProduct, page }}
      ></DebugComponent>
      {isLoading ? 'loading...' : <div ref={bottom}>wow</div>}
    </section>
  );
}