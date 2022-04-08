import React from 'react'
import vcbImage from "../../../Product Images/load isolator.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const LoadIso = () => {



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
                                 On Load Isolator (LBS)
                            </h2>
                            <p>
                                 On load Isolator (LBS) 400A, 3.3KV to 36KV Manual & motorized
                                We provide compact modular load break switch panels in a metal covered box that may be extended on both sides. The modular load break switch panels can be employed in a variety of ways, including Ring Main Systems, Multi Panels, and so on. Transformers, overhead lines, capacitors, ring mains, and cables can all be switched with a load break switch.
                                we offer Manual & motorized as per customer requirement

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

export default LoadIso