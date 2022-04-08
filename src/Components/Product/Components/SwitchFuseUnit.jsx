import React from 'react'
import vcbImage from "../../../Product Images/switch_fuse_unit-removebg-preview.png"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link } from 'react-router-dom'

const SFU = () => {



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
                                Switch Fuse Unit (SFU) up to 33KV (indoor /outdoor type)
                            </h2>
                            <p>
                                Switch Fuse Unit (SFU) up to 33KV (indoor /outdoor type)

                                unit has a load break switch & fuse arrangement & if required it will have earth switch also. suitable for indoor & outdoor application.

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

export default SFU