import React from 'react'
import vcbImage from "../../../Product Images/metering kisok.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const MK = () => {



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
                                Metering Kiosk
                            </h2>
                            <p>
                                Metering Kiosk with isolator combine unit up to 33KV (indoor /outdoor type)
                                With our experience and expertise in the field we offer to all our clients the range of Metering kiosk with Isolator Combine Unit. This Metering Kiosk can be used in both indoor and outdoor site. The machine has the capacity of up to 33KV. These are made of the most superior quality material and are highly durable.


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

export default MK