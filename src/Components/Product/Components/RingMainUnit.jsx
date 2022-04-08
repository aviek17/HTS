import React from 'react'
import vcbImage from "../../../Product Images/ring main unit.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const Ring = () => {



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
                                Ring main unit [RMU] up to 33KV (indoor /outdoor type)
                            </h2>
                            <p>
                                it Can be made extensible on both sides.
                                Consists of 2/3 units of 11 KV / 22 KV, 400 A / 630 A continuously rated triple pole load breaking switches.
                                Switches provided for incomer are non-automatic quick make, quick break with inter connecting bus bars & space for termination of cables.
                                One tee off unit having load break switch with earth switch & fuses for short circuit
                                protection is also provided.
                                RMU can also be provided with two numbers of load break switches, one tee-off vacuum circuit breaker & protective devices as per customer's requirement.

                                The Ring system provides greater flexibility in distribution. Continuity of supply can be maintained from any adjacent section. Faulty section can be easily isolated, thus leaving the healthy section, to continue to operate. This helps to increase the system reliability & efficiency.

                                <br /><br />
                                 we can also supply ABB make RMU up to 36KV

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

export default Ring