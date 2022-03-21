import React from 'react'
import vcbImage from "../../../Product Images/gas insulated switchgear.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const GasInsulated = () => {



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
                                Gas Insulated Switchgear (GIS)
                            </h2>
                            <p>
                                GIS (gas-insulated high-voltage switchgear) is a metal-encapsulated switchgear that contains high-voltage components such as circuit breakers and disconnectors and can be securely operated in tight places. Extensions, city buildings, roofs, offshore platforms, industrial plants, and hydropower plants are all examples of places where GIS is applied. GIS is known for its high levels of dependability, operational safety, and environmental friendliness. It offers a comprehensive range of solutions for all ratings and applications to meet present and future switchgear requirements.
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

export default GasInsulated