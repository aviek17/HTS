import React from 'react'
import vcbImage from "../../../Product Images/auto_tranformer_starter-removebg-preview.png"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const AutoTransformer = () => {



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
                                Auto Transformer Starter (ATS)
                            </h2>
                            <p>
                                Auto-transformer starter (Variable Autotransformer) can be used with any squirrel cage induction motor, motor supplied through taps of three-phase auto transformer starter.
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

export default AutoTransformer