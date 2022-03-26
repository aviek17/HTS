import React from 'react'
import vcbImage from "../../../Product Images/FIXED LT.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const FixedLT = () => {



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
                                Fixed Type LT Switchgears & Instrumentation Panel
                            </h2>
                            <p>
                                LT Panel is an electrical distribution board that receives power from generator or transformer and distributes the same to various electronic devices and distribution boards. Such panels are used in industries both for internal and external use and, therefore, they are quite rugged to withstand different climatic conditions. Our LT panels are designed to work with low electricity consumption that makes them cost effective.
                                *** for more details kindly ask for presentation ***

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

export default FixedLT