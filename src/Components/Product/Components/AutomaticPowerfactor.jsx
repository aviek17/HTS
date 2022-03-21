import React from 'react'
import vcbImage from "../../../Product Images/automatic power factor.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const AutomaticPower = () => {



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
                                Automatic Power Factor Correction Panels [APFC] for HT & LT
                            </h2>
                            <p>
                                These electrical control panels maintain the power factor of the system automatically by switching the capacitor banks as per the needs of the system. Automatic power factor correction is typical for large electrical systems with fluctuating load where it is common to connect number of capacitors to main power distribution station or substation. The capacitors are controlled by controller which continuously monitors the relative power demand. The relay connects or disconnects the capacitors to compensate for actual reactive power of the total load and reduce overall demand supply.
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

export default AutomaticPower