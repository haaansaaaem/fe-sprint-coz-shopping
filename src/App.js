import { BrowserRouter as Route, Routes } from 'react-router-dom';  // npm install react-router-dom
import './app.css';
import Header from './component/Header'
import Main from './pages/Main'
import Footer from './component/Footer'
import ProductList from './pages/ProductList';
import Bookmark from './pages/Bookmark';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" component={Main} />
        <Route path="/products/list" component={ProductList} /> 
        <Route path="/bookmark" component={Bookmark} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
