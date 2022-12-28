import {GiHamburgerMenu} from 'react-icons/gi'

import {FaUserCircle} from 'react-icons/fa'

import {HiShoppingCart} from 'react-icons/hi'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="icon-container">
      <GiHamburgerMenu className="ham-icon" />
      <h1 className="title">IndigoLearn</h1>
    </div>
    <div className="details-container">
      <h1 className="detail-heading">BUY COURSES</h1>
      <h1 className="detail-heading">BUY BOOKS</h1>
      <h1 className="detail-heading">PROGRAMS</h1>
      <h1 className="detail-heading">FREE RESOURCES</h1>
    </div>
    <div className="cart-container">
      <HiShoppingCart className="cart-icon" />
    </div>
    <div className="button-container">
      <button type="button" className="login-button">
        <FaUserCircle className="login-icon" />
        Login/Sign Up
      </button>
    </div>
  </div>
)

export default Header
