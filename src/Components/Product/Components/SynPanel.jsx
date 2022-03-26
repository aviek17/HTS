import React from 'react'
import vcbImage from "../../../Product Images/Synchronizing panel.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const SynPanel = () => {



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
                                Synchronizing panel
                            </h2>
                            <p>
                                Synchronization panels are primarily utilised to suit the requirements of power systems. For one or more generator breakers, these panels offer both manual and automatic synchronization.
                                They're frequently used to synchronized generators and provide multiplexing options.

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

export default SynPanel