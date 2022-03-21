import React from 'react'
import "../App.css"
import icon1 from "../Images/Logo_icon.PNG"
import icon2 from "../Images/logo2.PNG"
import menu from "../Images/hamburger.png"
import {Link} from 'react-router-dom'



const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="logo">
                    <Link to="/">  <img src={icon1} alt="" height="80px" /> </Link>
                   
                </div>



                <label for="btn" className="icon">
                    <img src={menu} alt="" height="30px" />
                </label>


                <input type="checkbox" id="btn" />


                <ul className="menu2" >
                    <li> <Link to="/">Home</Link> </li>




                    <li>
                        <label for="btn-1" className="show">Who We Are +</label>
                        <Link to="#" className="remove">Who We Are</Link>
                        <input type="checkbox" id="btn-1" />
                        <ul className="hello">
                            <li><Link to="/about">About Company</Link></li>
                            <li><Link to="/strength">Strength</Link></li>
                            <li><Link to="/approvals">Approvals</Link></li>
                            <li><Link to="/management">Our Management</Link></li>
                        </ul>
                    </li>




                    <li>
                        <Link to="/product" >Products</Link>
                    </li>



                    <li><Link to="/clients">Clients</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><img className="ml-3 mt-2 navIconTwo" src={icon2} alt="" height="80px" width="150px" /></li>
                </ul>

                <div>
                    <img className=" navIconThree" src={icon2} alt="" height="80px" width="150px" />
                </div>

            </nav>

        </>
    )


}

export default Navbar