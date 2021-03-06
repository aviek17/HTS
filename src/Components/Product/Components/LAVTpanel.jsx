import React from 'react'
import vcbImage from "../../../Product Images/LAVT_panel-removebg-preview.png"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const LAVT = () => {



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
                                LAVT panel
                            </h2>
                            <p>
                                An LAVT panel is a cubicle which houses a Lightning Arrester (Surge Arrester), Surge Capacitor, and Voltage / Potential Transformers for a Phase Isolated Bus Duct. ... LAVT Panels are used in all high voltage power Plants wherein for protection of the Alternator.
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

export default LAVT