import { useEffect, useState } from 'react';
import Product from '../component/Product'
import './main.css'

export default function Main() {
  const [productList, setProductList] = useState([]);  // 상품 리스트 상태 변수
  const [bookmarkList, setBookmarkList] = useState([]);  // 북마크 리스트 상태 변수
  const [isBookmark, setIsBookmark] = useState({}); // 북마크 상태 추적 변수
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
        .then(res => res.json())
        .then(json => {
          setProductList(json.slice(0, 4));
          setBookmarkList(json.slice(4, 8)); 
          setIsLoading(false);
        });
    }, []);
  
    const toggleBookmark = id => {
      setIsBookmark((prevState) => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    };

  return (
    <div>
      <section className="main-section">
        <h3 className="list-title">상품 리스트</h3>
        <div className="product-list">
          {productList.map(product => {
            return (
              <div className="wrapper">
                <Product
                  key={product.id}
                  title={product.title}
                  image_url={product.image_url}
                />
                <img 
                  className="bookmarkIcon" 
                  src={isBookmark[product.id] ? `${process.env.PUBLIC_URL}/bookmarkIconON.png` : `${process.env.PUBLIC_URL}/bookmarkIconOFF.png`}
                  alt="bookmark" 
                  onClick={() => toggleBookmark(product.id)}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="main-section">
        <h3 className="list-title">북마크 리스트</h3>
        <div className="product-list">
          {bookmarkList.map(product => {
            return (
              <div className="wrapper">
                <Product
                  key={product.id}
                  title={product.title}
                  image_url={product.image_url}
                />
                <img 
                  className="bookmarkIcon" 
                  src={isBookmark[product.id] ? `${process.env.PUBLIC_URL}/bookmarkIconON.png` : `${process.env.PUBLIC_URL}/bookmarkIconOFF.png`}
                  alt="bookmark" 
                  onClick={() => toggleBookmark(product.id)}
                />
              </div>
            );
          })}
        </div>      
        {isLoading ? 'loading...' : null}
      </section>
    </div>
  );
}

// export function RandomImg({ title, image_url }) {
//   const defaultImage = 'https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZHVjdHx8fHx8fDE2ODk1MTk2NDg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'; // 대체 이미지의 경로를 지정합니다.

//   const handleError = e => {
//     e.target.onerror = null;
//     e.target.src = defaultImage;
//   }

  // return (
  //   <div className='product-container'>
  //     <img src={image_url} alt='' onError={handleError} /> 
  //     <h3>{title}</h3>
  //     <span className='product-detail'>product detail</span>
  //   </div>
  // );
// }
