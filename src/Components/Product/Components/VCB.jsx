import React from 'react'
import vcbImage from "../../../Product Images/VCB breaker.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import {Link} from 'react-router-dom'

const VCB = () => {

    

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
                                VCB Breaker Panel up to 33KV
                            </h2>
                            <p>
                                Our VCB Panels are designed based on 3 Decades Years old experience in this segment. We keep in mind, its durability, operational safety, protections, client specific requirements and customizations.

                             <br /><br />   The product which we offer is widely demanded in the market for its trouble-free performance and long lasting electrical & mechanical life. Due to its long life, the product reduces the frequent expenditures met in exchanging the accessories. Additionally, the product has a certain operating mechanism that makes sure the safety of the users.

                              <br /><br />  Vacuum Circuit breaker (VCB) suitable for indoor & outdoor application are available. It’s rating stats from 3.3KV to 33KV & current rating 630A to 3150A & 4000A with force cooling.
                            <br /><br /> *** for more details kindly ask for presentation ***
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

export default VCB