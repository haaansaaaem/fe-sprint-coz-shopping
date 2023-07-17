import { BrowserRouter, Route, Routes } from 'react-router-dom'; // npm install react-router-dom
import React, { useEffect, useState } from "react";
import axios from "axios";
import './app.css';
import Header from './component/Header'
import Main from './pages/Main'
import Footer from './component/Footer'
import ProductList from './pages/ProductList';
import Bookmark from './pages/Bookmark';

export default function App() {

  // useEffect(() => {
  //   fetch('http://cozshopping.codestates-seb.link/api/v1/products ')
  //     .then(response => {
  //       if(!response.ok){
  //         throw new Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then(json => console.log(json))
  //     .catch(err => console.err(err));
  // }, []);

  const [product, setProduct] = useState([]);
  const [isBookmark, setIsBookmark] = useState(false);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products", {
        params: { count: 4 },
      })
      .then((response) => {
        const data = response.data.map((item) => ({
          ...item,
          isBookmark: false,
        }));
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={
          <Main product={product}
                setProduct={setProduct}
                isBookmark={isBookmark}
                setIsBookmark={setIsBookmark} />}/>
        <Route path="/products/list" element={<ProductList />} /> 
        <Route path="/bookmark" element={<Bookmark />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );

  // function DebugComponent(data){
  //   return <button onClick={() => console.log(data)}>console.log</button>
  // }
}
