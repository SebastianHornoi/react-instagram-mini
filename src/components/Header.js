import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header__component__container'>
       <img className='header__logo' src="./img/Instagram-logo.png" alt="" />
       <div className="header__icons__container">
         <img className='header__icons' src="./img/plus.png" alt="" />
         <img className='header__icons' src="./img/heart.png" alt="" />
         <img className='header__icons' src="./img/send.png" alt="" />
       </div>
    </div>
  )
}
