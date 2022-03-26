import React from 'react'
import vcbImage from "../../../Product Images/ats control panel.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const ATS = () => {

    

    return (
        <>
            <h2 className="productHeader">Our Products</h2>
            <div className="productDesign">
                <div className="containerProduct">
                    <div className="imgBx">
                        <img src={vcbImage} alt="" />
                    </div>
                    <div className="detailsProduct">
                        <div className="contentProducts">
                            <h2>
                              ATS Control Panel
                            </h2>
                            <p>
                                Our ATS Control Panel is a high-performance digital controller for changing the supply power and generator supply. Our ATS Control Panel also includes an automated transfer switch, which is necessary in buildings in the event of a power outage. We provide an ATS Control Panel that can automatically switch loads from mains power to emergency power. When the main power supply fails or the voltage falls below 80% of normal, the ATS Control Panel we sell will automatically activate the emergency generator set after a specified time. 
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

export default ATS