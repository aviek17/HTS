import React from 'react'
import vcbImage from "../../../Product Images/vacum contractor.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const VacCont = () => {



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
                                Vacuum contactor panel for Motor Capacitor & transformer up to 11KV
                            </h2>
                            <p>
                                VC panel suitable for indoor & outdoor application are available.
                                It’s rating stats from 3.3KV to 11KV & current rating 400A to 630A, it can be used for switching the Motor, Capacitor Bank & transformers.
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

export default VacCont