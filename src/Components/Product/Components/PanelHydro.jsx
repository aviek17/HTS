import React from 'react'
import vcbImage from "../../../Product Images/Panel Hydro.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const Hydero = () => {

    

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
                            	Panel required for Hydro / co-generation projects
                            </h2>
                            <p>
                            These Panels are widely used in power plants & are completely tailor made as per customer requirement & technical specification.
                            </p>
                            <a href={file}><button className="buttonProductOne" >Download</button></a>
                            <button  className="buttonProductTwo">Enquiry</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hydero