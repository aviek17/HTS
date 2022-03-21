import React from 'react'
import Carousell from "./Carousell"
import about from "../Images/about.PNG"
import features from "../Images/features.PNG"
import Sectors from "./Sectors"
import HomeClient from "./HomeClient"
import { Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Carousell />

            <div className="section">
                <div className="containerA">
                    <div className="row title" data-aos="fade-down"><h1>ABOUT HTSWITCHGEARS</h1></div>
                    <div className="row">
                        <div className="image-section mt-5" data-aos="fade-right">
                            <img src={about} alt="" srcSet="" />
                        </div>
                        <div className="content">
                            <div className="article" data-aos="fade-left">
                                
                                <p>
                                    Established in 2006, HTSwitchgears Pune (India) is a multi-product, vertically integrated manufacturer. Specialized in entire range of Medium Voltage, Low voltage Switchgears & Services. Company is motivated & promoted by first generation entrepreneurs. A group of technocrats complimented by a dedicated team and powered by technical up gradation-integration-innovation-transparency and integrity at each stage of our growth.
                                
                                    <strong>H.T.SWITCHGEARS</strong> earnestly & continuously strives to achieve excellence not only in its operations but also in the foray of Corporate Citizenship. 
                                </p>
                                <div className="button">
                                    <Link to="/about">Know More</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container">
                <div className="why" data-aos="zoom-out">
                    <h1 >Why Choose HTSwitchgears?</h1>
                </div>
                <div className="row rowWHy">
                    <div className="col imageFeature" data-aos="zoom-in-up">
                        <img src={features} alt="" />
                    </div>
                    <div className="col">
                        <div className="containerFeatures">
                            <div className="timeline" data-aos="zoom-in-down">
                                <ul>
                                    <li><div className="timeline-content"><h3>Manual control provision</h3></div></li>
                                    <li><div className="timeline-content"><h3>Fast operation</h3></div></li>
                                    <li><div className="timeline-content"><h3>Completely certain discrimination</h3></div></li>
                                    <li><div className="timeline-content"><h3>Entire Reliability</h3></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sectors/>

            <HomeClient/>
        </>
    )
}

export default Home