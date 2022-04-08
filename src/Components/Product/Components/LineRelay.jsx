import React from 'react'
import vcbImage from "../../../Product Images/line relay.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link}  from 'react-router-dom'

const LineRelay = () => {



    return (
        <>
         <h2 className="productHeader">Our Products</h2>
            <div className="productDesign">
                <div className="containerProduct">
                    <div className="imgBx">
                        <img src={vcbImage} alt="" />
                    </div>
                    <div className="detailsProduct">
                        <div className="contentProduct">
                            <h2>
                                Line relay & metering Panel
                            </h2>
                            <p>
                                Line relay & metering Panels are widely used in power plants & are completely tailor made as per customer requirement & technical specification. It is compatible with Scada & remote operation
                            </p>
                            <a href={file}><button className="buttonProductOne" >Download</button></a>
                            <Link to="/contact"><button  className="buttonProductTwo">Enquiry</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineRelay