import React from 'react'
import vcbImage from "../../../Product Images/fcma soft.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const FCMA = () => {



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
                                FCMA Soft Starter
                            </h2>
                            <p>
                                FCMA Soft starter for HT & LT for 415V to 12KV <br/>
                                The offered soft starter panel is designed to facilitate the housing of electric components and accessories. Our manufactured soft starter panel is easy to install and fix. The offered soft starter panel is available at very cost-effective market rates. We can supply line side as well as neutral side soft starter.

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

export default FCMA