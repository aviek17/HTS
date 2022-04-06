import React from 'react'
import "./../App.css"
import pld from "../Images/PLD_ PASSPORT PHOTO.jpeg"
import rbk from "../Images/RBK_ PASSPORT PHOTO.jpeg"
import sbb from "../Images/SBB_ PASSPORT PHOTO.jpeg"
import Carousel from "../Components/Carousell"


const OurManagement = () => {
    return (
        <>
            
            <div className="teamTitle teamTitlePara" data-aos="zoom-out">
                <hr />
                <h3>Our <span>Management</span> </h3>
                <p>
                    A promising Switchgear Manufacturing and Service provider company was established by a group of expert professionals. Diverse experience came together for achieving a common goal to steer customers through the next generation of business innovation powered by technology. The company was founded on the principle of building and implementing great ideas that drive progress for clients and enhance lives through enterprise solutions.
                </p>
                <hr />
            </div>


            <div className="section">
                <div className="containerA">
                    <div className="row">
                        <div className="image-section mt-5 contentImage" data-aos="fade-right">
                            <img src={pld} alt="" srcSet="" />
                        </div>
                        <div className="content contentPara">
                            <div className="article articlePara" data-aos="fade-left">

                                <p>
                                    Highly motivated and experienced sales icon with 29+ years of proven history of business development, success in domestic and international sales, services, marketing and channel management. Special expertise in building and leading top-performing teams, coordinating critical activities. Experienced at directing sales to new heights and exploring new markets for company’s next level growth.
                                </p>
                            </div>
                            <div className="contentDireactor" data-aos="fade-right">
                                <p>
                                    Mr. P. L. DIXIT
                                    <br />
                                    Sales Director
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="image-section mt-5 contentImage" data-aos="fade-right">
                            <img src={sbb} alt="" srcSet="" />
                        </div>
                        <div className="content contentPara">
                            <div className="article articlePara" data-aos="fade-left">

                                <p>
                                    Over 28 Years of executive leadership and management experience in manufacturing operations. Strong portfolio of achievements that includes cost reductions, 180-degree turnarounds for underperforming operations, fast track growth for start-up enterprises and significant quality, safety, productivity, and efficiency improvements.
                                </p>
                            </div>
                            <div className="contentDireactor" data-aos="fade-right">
                                <p>
                                    Mr. S. B. BADVE
                                    <br />
                                    Operations Director
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="image-section mt-5 contentImage1" data-aos="fade-right">
                            <img src={rbk} alt="" srcSet="" />
                        </div>
                        <div className="content contentPara">
                            <div className="article articlePara" data-aos="fade-left">

                                <p>
                                    Industry-known Technocrat with 27 years of vast experience in related field like design, engineering, new product development. He Promotes and coordinates technical knowledge harvesting within the organization. Defines, communicates and enforces industry standards. He is Visionary of positive results in driving internal growth with futuristic approach. His thrust on ensuring the technical quality of the various deliverables of the project while understanding the political and strategic aspects are contributing to staff development and contributing to the leadership.

                                </p>
                            </div>
                            <div className="contentDireactor" data-aos="fade-right">
                                <p>
                                    Mr. R. B. Khopkar
                                    <br />
                                    Technical Director
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            

        </>
    )
}

export default OurManagement