import React from 'react'
import vcbImage from "../../../Product Images/Lt PCC.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const LtPCC = () => {



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
                                LT PCC/MCC panel
                            </h2>
                            <p>
                                Power Control Centre is used for distribution and control of various power source used in industry. Normally Power Control Centre’s is installed near power source hence fault level is high. Busbar system in Power Control Centre’s is designed to suit the fault level as well as temperature rise to 40°c above ambient. Ample space is provided for cable termination. Various protections viz short circuit, overload, earth fault, under voltage etc are provided to protect source and equipment.
                                <br /><br /> *** for more details kindly ask for presentation ***

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

export default LtPCC