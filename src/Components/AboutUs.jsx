import React from 'react'
import "../Styles/AboutUs.css"
import Carousel from "./Carousell"
import about from "../Images/about2.jpg"
import pld from "../Images/PLD_ PASSPORT PHOTO.jpeg"
import rbk from "../Images/RBK_ PASSPORT PHOTO.jpeg"
import sbb from "../Images/SBB_ PASSPORT PHOTO.jpeg"

import vision from "../Images/vision1.jpg"
import mission from "..//Images/mission.jpg"
import quality from "../Images/quality.jpg"
import ehs from "../Images/ehs.jpg"


import { Link } from 'react-router-dom'


const AboutUs = () => {
    return (
        <>


            {/* about us */}
            <section id="about1">
                <div className="containerAboutTwo">
                    <div className="row">
                        <div className="col-sm-7" data-aos="zoom-out">
                            <h3 className="text-center aboutTwoTitle">WELCOME TO <span className="HTSwitch">HT SWITCHGEARS</span></h3>
                            <p className="AboutHead">Established in 2006, <strong>HT Switchgears Pune (India)</strong> is a multi-product, vertically integrated manufacturer. Specialized in entire range of Medium Voltage, Low voltage Switchgears & Services.
                                Company is motivated & promoted by first generation entrepreneurs.
                                A group of technocrats complimented by a dedicated team and powered by technical up gradation-integration-innovation-transparency and integrity at each stage of our growth.</p>
                            <p>State-of-the-Art designing, manufacturing & testing facilities along with thrust on quality and technology are giving HTS national and international recognition in the form of Certifications by leading Government /Semi Government/ Private Organizations across India and International customers.</p>
                            <p> <strong>HT SWITCHGEARS</strong> earnestly & continuously strives to achieve excellence not only in its operations but also in the foray of Corporate Citizenship. With deep respect for social values and human ethos we are committed to improve the Quality of life of its employees through Safe work practices and healthy environment.</p>
                        </div>
                        <div className="col-sm-5" data-aos="zoom-out-up">
                            <div className="img-wrap imgHead">
                                <img src={about} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* vision mission */}

            <div className="views">
                <div className="teamTitle" data-aos="zoom-out-up">
                    <h3>
                        Our <span>Views</span>
                    </h3>
                </div>
                <div className="missionDescription" data-aos="zoom-out">
                    <br />
                    <h5>Our Vision</h5>
                    <p><span>●</span>H.T. SWITCHGEARS shall be professionally managed, customer driven & committed to total quality.</p>
                    <p><span>●</span>H.T. SWITCHGEARS shall be Market leader with significant global perspective in the vertical product segments, we operate.</p>
                    <p><span>●</span>H.T. SWITCHGEARS shall be learning organization while achieving exponential growth & glory, focused on customer exultation research & development, world class manufacturing practices & ethical value system.</p>
                    <p><span>●</span>H.T. SWITCHGEARS shall be an accountable corporate citizen empowering its human resources & all its stakeholders’ consistent growth, pride, thrill & Excellence.</p>
                    <br />
                </div>
                <div className="missionDescription" data-aos="zoom-in">
                    <br />
                    <h5>Our Mission</h5>
                    <p><span>●</span>H.T. SWITCHGEARS will endeavor to achieve this vision by continually its upgrading its knowledge /core competence through indigenous research & development, human resource development, promoting, team spirit & entrepreneurship among its employees in order to achieve total customer satisfaction.</p>
                    <br />
                </div>
                <div className="missionDescription" data-aos="zoom-out">
                    <br />
                    <h5>Quality Policy</h5>
                    <p><span>●</span>H T Switchgears is driven by spirit of excellence, committed to enhance customer satisfaction by supplying Quality products as per customer’s requirements within the specified time limit.</p>
                    <p><span>●</span>Our focus is adding value at all stages and implement best business practices transparently by involving, motivating our employees and suppliers.</p>
                    <p><span>●</span>We will continually review our Quality Management System for growth of our organization.</p>
                    <br />
                </div>
                <div className="missionDescription" data-aos="zoom-in">
                    <br />
                    <h5>Environment Health, Safety (EHS) policy</h5>
                    <p><span>●</span>We, at HT Switchgears are committed to cause of promoting environmental conscience in the society by creating the awareness of environment, health and safety by</p>
                    <p><span>●</span>Safe and healthy environment for employees.</p>
                    <p><span>●</span>Providing training and management through environment friendly energy technologies & raising energy efficiency.</p>
                    <p><span>●</span>Complying with all applicable legal and other requirements related to environment & safety aspects.</p>
                    <p><span>●</span>Continually improving the product/process & services in order to limit, prevent & eliminate environmental pollution.</p>
                    <p><span>●</span>Communicating EHS policy to all people working for or on behalf of the organization.</p>
                    <br />
                </div>
            </div>

            {/* team */}
            <div className="teamTitle" data-aos="flip-down"><h3>Our <span>Management</span> </h3></div>

            <section className="profile">

                <div className="containerProfile" data-aos="flip-up">
                    <div className="cardProfile">
                        <div className="imgProfile">
                            <img src={pld} alt="" />
                            <h2>Mr. P. L. Dixit</h2>
                            <p>Sales Director <br />
                                B.E. Electrical <br />
                                29 years Experience</p>
                            <ul className="social-icons">
                                <li><Link to="/management"><box-icon name='facebook-circle' type='logo' color='#2e64a4' ></box-icon></Link></li>
                                <li><Link to="/management"><box-icon name='twitter' type='logo' color='#3baadd' ></box-icon></Link></li>
                                <li><Link to="/management"><box-icon name='instagram' type='logo' color='#dd4388' ></box-icon></Link></li>
                                <li><Link to="/management"><box-icon name='linkedin-square' type='logo' color='#4394dd' ></box-icon></Link></li>
                            </ul>
                        </div>

                    </div>
                    <div className="cardProfile">
                        <div className="imgProfile">
                            <img src={rbk} alt="" />
                            <h2>Mr. R. B. Khopkar</h2>
                            <p>Technical Director <br />
                                B.E. Electrical <br />
                                27 years Experience</p>
                            <ul className="social-icons">
                                <li><Link to="/management"><box-icon name='facebook-circle' type='logo' color='#2e64a4' ></box-icon></Link></li>
                                <li><Link to="/management"><box-icon name='twitter' type='logo' color='#3baadd' ></box-icon></Link></li>
                                <li><Link to="/management"><box-icon name='instagram' type='logo' color='#dd4388' ></box-icon></Link></li>
                                <li><Link to="/management"><box-icon name='linkedin-square' type='logo' color='#4394dd' ></box-icon></Link></li>
                            </ul>
                        </div>

                    </div>
                    <div className="cardProfile">
                        <div className="imgProfile">
                            <img src={sbb} alt="" />
                            <h2>Mr. S. B. Badave</h2>
                            <p>Operations Director <br />
                                B.E. Electrical <br />
                                28 years Experience</p>
                            <ul className="social-icons">
                                <li><Link to="/management"><box-icon name='facebook-circle' type='logo' color='#2e64a4' ></box-icon></Link></li>
                                <li><Link to="/management"><box-icon name='twitter' type='logo' color='#3baadd' ></box-icon></Link></li>
                                <li><Link to="/management"><box-icon name='instagram' type='logo' color='#dd4388' ></box-icon></Link></li>
                                <li><Link to="/management"><box-icon name='linkedin-square' type='logo' color='#4394dd' ></box-icon></Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


            <div className="teamTitle"><button classname="buttonProfile"><Link to="/management">Know More</Link></button></div>





        </>


    )
}

export default AboutUs