import React, { useState } from 'react';  // (상태관리(useState))리액트 훅
import './header.css';

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownMenu = () => {
    setDropdown(!dropdown);
  };

  return (
    <header class='header-container'>
      <div className='logo-container'>
        <div className='logo-img' > 
          <img src='logo.png' alt='logo' />
        </div>
        <span className='logo-title'>Coz Shopping</span>        
      </div>
      <div className='hamburger-container' onClick={dropdownMenu}>
        <img src='hamburger.png' alt='hamburger menu' />
        {dropdown && (
          <div className='dropdown-menu'>
            {/* 드롭다운 메뉴의 내용을 여기에 추가하세요. */}
          </div>
        )}
      </div>
    </header>
  );
}