import React, { useState } from 'react'; // (상태관리(useState))리액트 훅
import { Link } from 'react-router-dom';
import './header.css';


export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownMenu = () => {
    setDropdown(!dropdown);
  };

  return (
    <header class='header-container'>
      <div className='logo-container'>
        <Link to='/'>
          <div className='logo-img' > 
            <img src='logo.png' alt='logo' />
          </div>
        </Link>
        <span className='logo-title'>Coz Shopping</span>        
      </div>
      <div className='hamburger-container' onClick={dropdownMenu}>
        <img src='hamburger.png' alt='hamburger menu' />
        {dropdown && (
          <div>
            <ul className='dropdown-menu'>
              <li className='hello'>○○○님, 안녕하세요!</li>
              <li><Link to="/product">🎁상품 리스트</Link></li>
              <li><Link to="/bookmark">⭐북마크 페이지</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}