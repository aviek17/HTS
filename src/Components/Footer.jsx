import React from 'react'
import logo from "../Images/Logo_icon.PNG"
import "../Styles/Footer.css"
import mail from "../Images/envelope-solid-24.png"
import call from "../Images/phone-regular-24.png"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row" data-aos="fade-down">
          <div className="col">
            <img src={logo} className="logo" alt=""/>
            <p>Established in 2006, HT Switchgears Pune (India) is a multi-product, vertically integrated manufacturer.
              Specialized in entire range of Medium Voltage, Low voltage Switchgears & Services.
              Company is motivated & promoted by first generation entrepreneurs.A group of technocrats complimented by a dedicated team and powered by technical up gradation-integration-innovation-transparency and integrity at each stage of our growth.
            </p>

          </div>

          <div className="col links">
            <h3>Links <div className="underline"><span></span></div></h3>
            <ul className="footerLinks">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">Who We Are</NavLink></li>
              <li><NavLink to="/approvals">Approvals</NavLink></li>
              <li><NavLink to="/product">Product</NavLink></li>
              <li><NavLink to="/clients">Client</NavLink></li>
            </ul>
            <h3 className="followUs">Follow Us <div className="underline"><span></span></div> </h3>
            <ul className="social-icons1">
              <li><NavLink to=""><box-icon name='facebook-circle' type='logo' color='#2e64a4' ></box-icon></NavLink></li>
              <li><NavLink to=""><box-icon name='twitter' type='logo' color='#3baadd' ></box-icon></NavLink></li>
              <li><NavLink to=""><box-icon name='linkedin-square' type='logo' color='#4394dd' ></box-icon></NavLink></li>
              <li><NavLink to=""><box-icon name='instagram' type='logo' color='#dd4388' ></box-icon></NavLink></li>
            </ul>
          </div>
          <div className="col secondCol">
            <h3>Office <div className="underline"><span></span></div></h3>
            <p>HT Switchgears</p>
            <p>Survey No. 77/5, Dangat Estate, N.D.A.Road</p>
            <p>At Post-Shivane, Tal-Haveli</p>
            <p>Pune, Maharashtra, <br/> India - 411023</p>
            <p className="email-id"> <img src={mail} height ="20px" alt="" /> marketing@htswitchgears.com</p>
            <p><img src={call} alt="" height ="20px"/> (+91) 20 652955/6/7/8</p>
          </div>
          
          
        </div>
        <hr />
        <p className="copyRight"><NavLink to={{pathname : "https://sparsematrix.co.in/"}} target="_blank">Designed & Developed by eSparse Matrix Solutions Pvt. Ltd. All rights reserved.</NavLink></p>
      </footer>
    </>
  )
}

export default Footer