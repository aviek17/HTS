import React from 'react'
import vcbImage from "../../../Product Images/off load isolator.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const Off = () => {



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
                                Off Load Isolator
                            </h2>
                            <p>
                                Off Load Isolator 3150A, 3.3KV to 36KV Manual & motorized
                                we offer Off load Isolator from 3.3KV to 36KV, in manual & motorized operation.

                                Compact modular Off load isolator panels in a metal covered box that may be extended on both sides are available from us. Ring Main Systems, Multi Panels, and other applications can use the modular Off load isolator panels.
                                We can provide manual and motorised options, depending on the needs of the customer.


                            </p>
                            <a href={file}><button className="buttonProductOne" >Download</button></a>
                            <button className="buttonProductTwo">Enquiry</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Off