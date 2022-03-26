import React from 'react'
import vcbImage from "../../../Product Images/NGT Panel.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const NGT = () => {



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
                                NGT Panel
                            </h2>
                            <p>NEUTRAL GROUNDING RESISTOR (NGR) is used for the resistance grounding of Power
                                Systems. Earthing through Resistor is the most common, economical and effective
                                solution for impedance earthing. It is used, when the Neutral of the supply
                                transformer is available and its own impedance is not enough to limit the fault current.
                                Inserting a Resistor between the Neutral of the Generator / Transformer and Ground
                                serves to limit the maximum Fault Current to a predetermined value. This value is low
                                enough to prevent damaging Fault Currents to the generating, distribution and other
                                associated equipment’s; yet high enough to operate fault clearing relays.
                                Our NGT/NGR panels are with our own make single pole manual/motorized isolator &
                                single pole vacuum contactor also provided as per customer's request.

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

export default NGT