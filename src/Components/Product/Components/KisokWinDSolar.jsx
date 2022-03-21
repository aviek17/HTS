import React from 'react'
import vcbImage from "../../../Product Images/KISOK.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const Kisok = () => {



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
                                33KV, KIOSK for Wind & Solar Application
                            </h2>
                            <p>
                                we offer 33KV, kiosk Panels with Simple, compact & sturdy design.
                                It is Compact solutions for substations, Integrated unit with VCB, CT’s, PT’s and Metering & protection.
                                Available with OH conductor or cable termination arrangement
                                it Reduces the maintenance and increases reliability
                                Suitable for renewable generation applications
                                <br /> It complies the IP-55 for outdoor application. It is compatible with Scada & remote operation. It is completely tailor-made solutions.

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

export default Kisok