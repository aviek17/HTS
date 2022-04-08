import React from 'react'
import vcbImage from "../../../Product Images/BUS_CAPACITOR_PANEL-removebg-preview.png"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const CapaPanel = () => {



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
                                Capacitor Panel up to 36KV
                            </h2>
                            <p>
                                These are generally used in the electrical power industry. The offered range is made up of using best quality components and advance techniques, in compliance with international quality standards set by the industry. Apart from this, our product is strictly tested on all parameters by our quality analysers to ensure its quality for giving the best performance.
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

export default CapaPanel