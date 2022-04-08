import React from 'react'
import vcbImage from "../../../Product Images/ht & lt.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'
const HTLT = () => {



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
                                HT & LT Busduct
                            </h2>
                            <p>
                                HT & LT Busduct up to 33KV (indoor /outdoor type)
                                OUR designs bus duct systems in a way that it allows you to have multiple outputs from it without any power loss. Our manufactured Bus Bar Chambers needs very less
                                maintenance. We are one of the reputed bus duct suppliers in India to deliver quality systems of any type including
                               <br/> <br/> • Segregated bus duct
                               <br/> <br/> • LT Bus duct (Low Tension)
                               <br/> <br/> • MV Bus duct (Medium Voltage)

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

export default HTLT