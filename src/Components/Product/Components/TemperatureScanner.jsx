import React from 'react'
import vcbImage from "../../../Product Images/temperature_scanner-removebg-preview.png"
import file from "../../../Images/Brochure_HTS_F_C&R,LT_SPECIAL.pdf"
import { Link } from 'react-router-dom'

const TempSc = () => {



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
                                Temperature Scanner Panel.
                            </h2>
                            <p>
                                Now a days monitoring temperature of electrical Motor, Pump, Transformers are required to avoid any problems occurs.
                                we provide the Temperature scanner Panel as per client’s requirement. Floor mounted or Wall mounted as per site requirement.

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

export default TempSc