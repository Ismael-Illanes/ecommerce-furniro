import React from 'react'
import '../styles/headerPage.css'
import meubelHouseLogo from '../assets/Meubel House_Logos-05.png'
import skinClinicLogo from '../assets/SkinClinic.png'
import searchIcon from '../assets/akar-icons_search.png'
import heartIcon from '../assets/akar-icons_heart.png'
import cartIcon from '../assets/ant-design_shopping-cart-outlined.png'
import alertsIcon from '../assets/mdi_account-alert-outline.png'
export default function header() {
  return (
    <div className='header-box'>
      <div className='header-items-box'>
      <div className='header-logo-box'>
        <img src={meubelHouseLogo}></img>
        <img src={skinClinicLogo}></img>
      </div>
        <div className='header-text-box'>
          <a>Home</a>
          <a>Shop</a>
          <a>About</a>
          <a>Contact</a>
        </div>
        <div className='header-icons-box'>
          <a><img src={alertsIcon}></img></a>
          <a><img src={searchIcon}></img></a>
          <a><img src={heartIcon}></img></a>
          <a><img src={cartIcon}></img></a>
        </div>
      </div>
    </div>
  )
}
