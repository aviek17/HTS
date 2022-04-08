import React from 'react'
import vcbImage from "../../../Product Images/transformer_relay-removebg-preview.png"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link } from 'react-router-dom'

const TransRelay = () => {



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
                                Transformer Relay & Metering Panel
                            </h2>
                            <p>
                                These panels are commonly used in power plants and are totally customised to meet the needs of the customer and technical specifications. It is compatible with Scada & remote operation
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

export default TransRelay