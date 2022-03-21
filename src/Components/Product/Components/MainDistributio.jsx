import React from 'react'
import vcbImage from "../../../Product Images/Main Distribution Panel.jpg"
import "./../Styles/ProductCard.css"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const MD = () => {



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
                                Main Distribution Panels
                            </h2>
                            <p>
                                A Main distribution board which is fed from the transformer distribute the power to numerous individual circuits or DB. This is modular and customizes design of MDB make the system with high performance and maximum safety at reliability.
                                A wide range of compact, elegant & economical DBs with unique features, designed & engineered to provide
                                user safety, convenience and operational / maintenance advantages are offered. Aesthetically superior DBs to suit the style of your home decor. Complete range of DBs with detachable gland plates at the top and bottom with knockouts on the sides of DB to increase the flexibility of cables /conduit entry from all directions. Ready to use DBs that are supplied with Neutral Links, Earth Links, Bus Bar and inter-connecting wire/links.
                                <br /> *** for more details kindly ask for presentation ***

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

export default MD