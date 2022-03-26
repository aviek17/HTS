import React from 'react'
import vcbImage from "../../../Product Images/ht dol.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const HTDol = () => {



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
                                HT DOL Starter
                            </h2>
                            <p>
                                HT DOL Starter 
                                Electrical Starters are the delicate equipment’s but quite necessary for each industry and factory. As the name suggests, they are used to start the motors required for working. Any fault in the electrical starters can result into direct loss.

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

export default HTDol