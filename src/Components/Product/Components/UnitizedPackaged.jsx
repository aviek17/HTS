import React from 'react'
import vcbImage from "../../../Product Images/Unitized_Package-removebg-preview.png"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const UnitPack = () => {



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
                                Unitized Package Sub-Station (USS) up to 33KV
                            </h2>
                            <p> The Unitized Package Substation (USS) is a single factory-built substation package with transformer, HT, and LT controls. USS is fully compliant with all safety features and statutory regulations. Is a plug-and-play technology with precise, secure, and completely encased connections.
                                As a result, there is no risk of failure, corrosion, or loss. It is Available in Both Indoor /Outdoor Version with Dry type & Oil type transformer.
                               <br /><br /> *** for more details kindly ask for presentation ***

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

export default UnitPack