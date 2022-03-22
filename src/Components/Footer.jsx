import React from 'react'
import logo from "../Images/Logo_icon.PNG"
import "../Styles/Footer.css"
import fb from "../Images/fbIcon.jpg"
import twitter from "../Images/twitterIcon.jpg"
import linkedIn from "../Images/linkedIN.jpg"
import insta from "../Images/insta.png"
import map from "../Images/map.PNG"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row" data-aos="fade-down">
          <div className="col">
            <img src={logo} className="logo" />
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
            <ul className="social-icons">
              <li><NavLink to=""><img src={fb} alt="" height="30px" width="30px" /></NavLink></li>
              <li><NavLink to=""><img src={twitter} alt="" height="30px" width="30px" /></NavLink></li>
              <li><NavLink to=""><img src={linkedIn} alt="" height="30px" width="30px" /></NavLink></li>
              <li><NavLink to=""><img src={insta} alt="" height="30px" width="30px" /></NavLink></li>
            </ul>
          </div>
          <div className="col secondCol">
            <h3>Office <div className="underline"><span></span></div></h3>
            <p>HTSwitchgears</p>
            <p>Survey No. 77/5, Dangat Estate, N.D.A.Road</p>
            <p>At Post-Shivane, Tal-Haveli</p>
            <p>Pune, Maharashtra, India. - 411023</p>
            <p className="email-id"> <box-icon className="Envelope" name='envelope' color='#ffffff' ></box-icon> marketing@htswitchgears.com</p>
            <p><box-icon name='phone-call' color='#ffffff' ></box-icon>   (+91) 20 652955/6/7/8</p>
          </div>
          {/* <div className="col">
            <h3>Follow Us <div className="underline"><span></span></div> </h3>
            <ul className="social-icons">
              <li><NavLink to=""><img src={fb} alt="" height="40px" width="40px" /></NavLink></li>
              <li><NavLink to=""><img src={twitter} alt="" height="40px" width="40px" /></NavLink></li>
              <li><NavLink to=""><img src={linkedIn} alt="" height="40px" width="40px" /></NavLink></li>
              <li><NavLink to=""><img src={insta} alt="" height="40px" width="40px" /></NavLink></li>
            </ul>

          </div> */}
          {/* <div className="col">
            <h3>Location<div className="underline"><span></span></div> </h3>
            <a href="https://goo.gl/maps/3kgufP89jRA1n4TMA"><img src={map} alt="" width="250px"/></a>
            <h3 className="followUs">Follow Us <div className="underline"><span></span></div> </h3>
            <ul className="social-icons">
              <li><NavLink to=""><img src={fb} alt="" height="40px" width="40px" /></NavLink></li>
              <li><NavLink to=""><img src={twitter} alt="" height="40px" width="40px" /></NavLink></li>
              <li><NavLink to=""><img src={linkedIn} alt="" height="40px" width="40px" /></NavLink></li>
              <li><NavLink to=""><img src={insta} alt="" height="40px" width="40px" /></NavLink></li>
            </ul>
          </div> */}
        </div>
        <hr />
        <NavLink to={{pathname : "https://sparsematrix.co.in/"}} target="_blank"><p className="copyRight">Designed & Developed by eSparse Matrix Solutions Pvt. Ltd. All rights reserved.</p></NavLink>
      </footer>
    </>
  )
}

export default Footer