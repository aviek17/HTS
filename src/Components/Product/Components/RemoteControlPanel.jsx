import React from 'react'
import vcbImage from "../../../Product Images/remote control panel.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const Remote = () => {



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
                               Remote Control Panel
                            </h2>
                            <p>
                                Remote switching permits operation of the circuit breaker away from the substation at a safe distance. Direct operation of the switchgear is one of the most frequent exercises that exposes an operator to risk.

                                Circuit breakers can be opened and closed from a remote location, removing the operator outside the area of risk.

                                Remote switching provides a safer operating environment for personnel through the proven method of adding distance between the operator and the risk at the switchgear site.

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

export default Remote