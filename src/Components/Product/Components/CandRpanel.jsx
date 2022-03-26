import React from 'react'
import vcbImage from "../../../Product Images/c&r panel.jpg"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const CandR = () => {



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
                                C&R panel for Local electricity Board as per specification
                            </h2>
                            <p>
                                A control & relay panel is designed to provide to control the associated line or transformer through outdoor switchgear at various 11KV and 33KV zonal substations. The control & Relay panels are complete in themselves with all main and auxiliary relays, annunciation relay etc. These panels are used for the control & monitoring of electrical equipment’s such as transformers, generators and circuit breakers. Indoor Control panel for Outdoor VCB includes IDMT Numerical relay, Master Trip Relay, Trip circuit Supervision Relay, Indications & meters etc. These control & Relays panels are available in various combinations as single circuit or multi-circuit depending upon the customer requirements.
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

export default CandR