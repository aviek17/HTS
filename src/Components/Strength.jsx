import React from 'react'
import Carousel from "../Components/Carousell"
import "../Styles/Strength.css"
import strength from "../Images/strength.PNG"

const Strength = () => {
    return (
        <>
            <Carousel />
            <div className="containerStrength" >

                <div className="designStrength" data-aos="flip-down">
                    <h2>Strength</h2>
                </div>
                <div className="contentStrength" data-aos="flip-up">
                    <p>
                        HT Switchgears manufacturing facility with advance manufacturing equipment and processes are located at Shivane - Pune, Maharashtra, INDIA. It has total built up area of 45,000 Sq. ft. At HT Switchgears, we have very highly skilled & dedicated team of 110 professionals having expertise in the respective manufacturing fields.
                        <br />
                        <br />
                        Our manufacturing facility in Pune is equipped with state-of-the-art technology and fabrication facilities to Design manufacture Low & Medium Voltage Switchgears. Backed by continuous innovation and R&D, we supply various control panels in India.
                        <br />
                        <br />
                        AW PSB – 160 PS-Digi-Spl Arco Whitney Brand Multi Station Press for Punching, Bending and Shearing with standard accessories suitable for cutting, bending and punching on Copper and Aluminium Bus Bars
                        <br /><br />
                        We are equipped with various specialized Product Testing Equipments to meet up ISO and ABB standards.

                    </p>
                </div>
            </div>

            <div className="designStrengthFacility" data-aos="zoom-out-down">
                <h2>Testing Facility</h2>
            </div>

            <section id="aboutUs">
                <div className="containerAboutTwo  containerAboutLists">
                    <div className="row">
                        <div className="col-sm-7 contentLists" data-aos="zoom-out-down">
                            <h3 className="text-center aboutTwoTitle">HTS products are fully Type tested as per IS/IEC</h3>
                            <p>
                                HTS Testing Facility with modern equipment’s include
                                <br />
                                <span>||</span> Panel Testing Trolley (Chair Type)<br />
                                <span>||</span> High Voltage Tester(5kv,30kv & 80kv)<br />
                                <span>||</span> Megger (2.5kv & 5kv)<br />
                                <span>||</span> Tong Tester<br />
                                <span>||</span> Phase Sequence Indicator<br />
                                <span>||</span> Primary Injection Testing Set<br />
                                <span>||</span> Loading Transformer(3 Phase, 1000amp)<br />
                                <span>||</span> Relay Testing Panel (Secondary Injection Kit)<br />
                                <span>||</span> Mili Volt Drop Test Set<br />
                                <span>||</span> CT & PTTesting Setup (Eltech) As Per Electricity Board Requirement<br />
                                <span>||</span> VCB Timing Measurement Kit (Scope make)<br />
                                <span>||</span> Mv Drop Kit Make - Motwani<br />
                                <span>||</span> Analog Insulation Tester (5 Kv) Make-Waco<br />

                            </p>
                        </div>
                        <div className="col-sm-5" data-aos="zoom-out-up">
                            <div className="img-wrapA">
                                <img src={strength} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="researchDesign" data-aos="zoom-out">
                <div className="researchTitle">
                   <h2> Research and Development</h2>
                </div>
                <div className="researchContent">
                    <p>
                        Our advanced R&D wing is manned by expert engineers who are well-versed with serious research works. R&D department work in close coordination with production engineers and allied professionals in order to suggest them on redefining existing production procedure. Providing valuable advices on various advanced technologies for production line which can result more efficient and Quality switchgear products. <br />
                       <br /> Our R&D experts have facilitated minimization on loss of materials and proficient use of available resources. Our R&D department enables us to lead ahead of our competitors in global market through high quality achievements and ISO certification.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Strength