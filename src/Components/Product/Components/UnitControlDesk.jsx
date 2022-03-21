import React from 'react'
import vcbImage from "../../../Product Images/Unit control.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const UnitCo = () => {



    return (
        <>
            <div className="productDesign">
                <div className="containerProduct">
                    <div className="imgBx">
                        <img src={vcbImage} alt="" />
                    </div>
                    <div className="detailsProduct">
                        <div className="contentProduct">
                            <h2>
                               Unit control Desk
                            </h2>
                            <p>
                                We have a large selection of Unit Control Desks that come in a variety of sizes and configurations. We can also adapt the shape, size, style, and operation of these control panels to meet the needs of our clients, making us a popular choice across a wide range of industries.
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

export default UnitCo