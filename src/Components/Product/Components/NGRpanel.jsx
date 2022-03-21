import React from 'react'
import vcbImage from "../../../Product Images/NGR Panel.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const NGR = () => {



    return (
        <>
            <div className="productDesign">
                <div className="containerProduct">
                    <div className="imgBx">
                        <img src={vcbImage} alt="" />
                    </div>
                    <div className="detailsProduct">
                        <div className="contentProduct">
                            <h2>
                                NGR Panel
                            </h2>
                            <p>
                                The Short form of NGR is Neutral Grounding Resistor. NGRs are used in an electrical power system to protect the star connected alternator/generator or the transformer. NGR is constructed by inserting a resistor between the star connected neutral terminal and ground terminal. NGRs grounding system provides more benefits than both ungrounded and solidly grounded systems. Protection against transient over voltages. Measure the fault current through the NCT (Neutral grounding transformers)
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

export default NGR