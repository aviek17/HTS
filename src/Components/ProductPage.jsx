import React from 'react'
import "../Styles/ProductPage.css"
import { Link } from 'react-router-dom'
import vcb from "../Product Images/VCB breaker.jpg"
import vaccumCont from "../Product Images/vacum contractor.jpg"
import Kisok from "../Product Images/KISOK.jpg"
import unitized from "../Product Images/Unitized Package.jpg"
import fixedTypeLT from "../Product Images/FIXED LT.jpg"
import AutomaticPower from "../Product Images/automatic power factor.jpg"
import ltPcc from "../Product Images/Lt PCC.jpg"
import mainDistribution from "../Product Images/Main Distribution Panel.jpg"
import panelHydro from "../Product Images/Panel Hydro.jpg"
import generatorrelay from "../Product Images/generator relay.jpg"
import transformerRelay from "../Product Images/transformer relay.jpg"
import linerelay from "../Product Images/line relay.jpg"
import synPanel from "../Product Images/Synchronizing panel.jpg"
import lavt from "../Product Images/LAVT panel.jpg"
import ngt from "../Product Images/NGT Panel.jpg"
import ngr from "../Product Images/NGR Panel.jpg"
import unitControl from "../Product Images/Unit control.jpg"
import remoteControl from "../Product Images/remote control panel.jpg"
import fcma from "../Product Images/fcma soft.jpg"
import htdol from "../Product Images/ht dol.jpg"
import ltStarter from "../Product Images/lt starter panel.jpg"
import crpanel from "../Product Images/c&r panel.jpg"
import htlt from "../Product Images/ht & lt.jpg"
import onloadisolator from "../Product Images/load isolator.jpg"
import offloadIsolator from "../Product Images/off load isolator.jpg"
import ringmainunit from "../Product Images/ring main unit.jpg"
import switchfuseunit from "../Product Images/switch fuse unit.jpg"
import meteringkisok from "../Product Images/metering kisok.jpg"
import gasinsulatedswitch from "../Product Images/gs.jpg"
import capacitorpanel from "../Product Images/capacitor panel.jpg"
import atscontrol from "../Product Images/ats control panel.jpg"
import autoTransformer from "../Product Images/auto tranformer starter.jpg"
import temperatureScanner from "../Product Images/temperature scanner.jpg"
import Carousel from "../Components/Carousell"
const ProductPage = () => {
    return (
        <>
            <Carousel/>
            <hr/>
            <div className="teamTitle" data-aos="flip-down"><h1>Our <span>Products</span> </h1></div>

            <section className="profile">

                <div className="containerProfile" data-aos="flip-up">
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={vcb} alt="" />
                            <h2>VCB Breaker Panel </h2>
                            <p>VCB breaker panel up to 33KV (indoor /outdoor type)

                                Our VCB Panels are designed based on 3 Decades Years old experience in this segment. </p>

                                <Link  to="/products/vcb"><button className="navTag">Know More</button></Link>

                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={vaccumCont} alt="" />
                            <h2>Vacuum Contactor Panel</h2>
                            <p>Vacuum contactor panel for Motor Capacitor & transformer up to 11KV.
                                VC panel suitable for indoor & outdoor application are available.
                            </p>
                            <Link  to="/products/vaccum"><button className="navTag">Know More</button></Link>

                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={Kisok} alt="" />
                            <h2>33KV, KIOSK for Wind & Solar Application</h2>
                            <p>We offer 33KV, kiosk Panels with Simple, compact & sturdy design.

                            </p>
                            <Link  to="/products/kisok"><button className="navTag">Know More</button></Link>

                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={unitized} alt="" />
                            <h2>Unitized Package Sub-Station (USS) </h2>
                            <p>The Unitized Package Substation (USS) is a single factory-built substation package with transformer, HT, and LT controls. </p>
                            <Link  to="/products/unitizedPackaged"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={fixedTypeLT} alt="" />
                            <h2>Fixed Type LT Switchgears & Instrumentation Panel</h2>
                            <p>LT Panel is an electrical distribution board that receives power from generator or transformer and distributes the same to various electronic devices </p>
                            <Link  to="/products/fixedTypelT"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={AutomaticPower} alt="" />
                            <h2>Automatic Power Factor Correction Panels [APFC] </h2>
                            <p>These electrical control panels maintain the power factor of the system automatically by switching the capacitor banks as per the needs of the system. </p>
                            <Link  to="/products/automaticPower"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={ltPcc} alt="" />
                            <h2>LT PCC/MCC Panel</h2>
                            <p>LT PCC/MCC panel
                                Power Control Centre is used for distribution and control of various power source used in industry. </p>
                            <Link  to="/products/ltPCC"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={mainDistribution} alt="" />
                            <h2>Main Distribution Panel</h2>
                            <p>A Main distribution board which is fed from the transformer distribute the power to numerous individual circuits or DB.</p>
                            <Link  to="/products/mainDistribution"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={panelHydro} alt="" />
                            <h2>Panel Hydro </h2>
                            <p>Panel required for Hydro / co-generation projects</p>
                            <Link  to="/products/hydro"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={generatorrelay} alt="" />
                            <h2>Generator Relay & Metering Panel</h2>
                            <p>These Panels are widely used in power plants & are completely tailor made as per customer requirement & technical specification.</p>
                            <Link  to="/products/generatorRelay"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={transformerRelay} alt="" />
                            <h2>Transformer Relay & Metering Panel</h2>
                            <p>These panels are commonly used in power plants and are totally customised to meet the needs of the customer </p>
                            <Link  to="/products/transformerRelay"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={linerelay} alt="" />
                            <h2>Line relay & metering panel</h2>
                            <p>These Panels are widely used in power plants & are completely tailor made as per customer requirement</p>
                            <Link  to="/products/lineRelay"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={synPanel} alt="" />
                            <h2>Synchronizing panel</h2>
                            <p>Synchronization panels are primarily utilised to suit the requirements of power systems. </p>
                            <Link  to="/products/synPanel"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={lavt} alt="" />
                            <h2>LAVT panel</h2>
                            <p>An LAVT panel is a cubicle which houses a Lightning Arrester (Surge Arrester), Surge Capacitor, and Voltage / Potential </p>
                            <Link  to="/products/lavt"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={ngt} alt="" />
                            <h2>NGT panel</h2>
                            <p>NEUTRAL GROUNDING RESISTOR (NGR) is used for the resistance grounding of Power</p>
                            <Link  to="/products/ngt"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={ngr} alt="" />
                            <h2>NGR panel</h2>
                            <p>NGRs are used in an electrical power system to protect the star connected alternator/generator or the transformer.</p>
                            <Link  to="/products/ngr"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={unitControl} alt="" />
                            <h2>Unit control Desk</h2>
                            <p>We have a large selection of Unit Control Desks that come in a variety of sizes and configurations</p>
                            <Link  to="/products/unitControl"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={remoteControl} alt="" />
                            <h2>Remote control Panel</h2>
                            <p>Remote switching permits operation of the circuit breaker away from the substation at a safe distance</p>
                            <Link  to="/products/remoteControl"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={fcma} alt="" />
                            <h2>FCMA Soft starter for HT & LT</h2>
                            <p>The offered soft starter panel is designed to facilitate the housing of electric components and accessories. </p>
                            <Link  to="/products/fcma"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={htdol} alt="" />
                            <h2>HT DOL starter</h2>
                            <p>Electrical Starters are the delicate equipment’s but quite necessary for each industry and factory</p>
                            <Link  to="/products/htDOL"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={ltStarter} alt="" />
                            <h2>LT starter Panel </h2>
                            <p>This starter is a DOL and star-delta model that is used to start three-phase motors</p>
                            <Link  to="/products/ltStarter"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={crpanel} alt="" />
                            <h2>C&R panel for Local electricity Board </h2>
                            <p>A control & relay panel is designed to provide to control the associated line or transformer</p>
                            <Link  to="/products/crPanel"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={htlt} alt="" />
                            <h2>HT & LT Busduct </h2>
                            <p>HT & LT Busduct up to 33KV (indoor /outdoor type)
                                OUR designs bus duct systems in a way that it allows you to have multiple outputs </p>
                            <Link  to="/products/htlt"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={onloadisolator} alt="" />
                            <h2>On load Isolator (LBS) </h2>
                            <p>We provide compact modular load break switch panels in a metal covered box that may be extended on both sides</p>
                            <Link  to="/products/onLoad"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={offloadIsolator} alt="" />
                            <h2>Off load Isolator</h2>
                            <p>we offer Off load Isolator from 3.3KV to 36KV, in manual & motorized operation.</p>
                            <Link  to="/products/offLoad"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={ringmainunit} alt="" />
                            <h2>Ring main unit [RMU] </h2>
                            <p>Ring main unit [RMU] up to 33KV (indoor /outdoor type)

                                it Can be made extensible on both sides.
                            </p>
                            <Link  to="/products/ringMain"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={switchfuseunit} alt="" />
                            <h2>switch fuse unit (SFU) </h2>
                            <p>Switch fuse unit (SFU) up to 33KV (indoor /outdoor type)

                                this unit has a load break switch & fuse arrangement </p>
                            <Link  to="/products/switchFuse"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={meteringkisok} alt="" />
                            <h2>Metering kiosk </h2>
                            <p>Metering kiosk with isolator combine unit up to 33KV (indoor /outdoor type)
                                With our experience and expertise in the field we offer to all our clients </p>
                            <Link  to="/products/meteringK"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={gasinsulatedswitch} alt="" />
                            <h2>Gas Insulated Switchgear (GIS)</h2>
                            <p>GIS (gas-insulated high-voltage switchgear) is a metal-encapsulated switchgear that contains high-voltage </p>
                            <Link  to="/products/gasInsulated"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={capacitorpanel} alt="" />
                            <h2>Capacitor Panel </h2>
                            <p>Capacitor Panel up to 36KV
                                These are generally used in the electrical power industry</p>
                            <Link  to="/products/capacitor"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={atscontrol} alt="" />
                            <h2>ATS Control Panel</h2>
                            <p>Our ATS Control Panel is a high-performance digital controller for changing the supply power and generator supply</p>
                            <Link  to="/products/ats"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={autoTransformer} alt="" />
                            <h2>Auto Transformer Starter (ATS)</h2>
                            <p>Auto-transformer starter (Variable Autotransformer) can be used with any squirrel cage induction motor</p>
                            <Link  to="/products/autoTrans"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>
                    <div className="cardProfiles">
                        <div className="imgProfiles">
                            <img src={temperatureScanner} alt="" />
                            <h2>Temperature Scanner Panel.</h2>
                            <p>Temperature Scanner Panel.
                                now a days monitoring temperature of electrical Motor, Pump</p>
                            <Link  to="/products/tempScan"><button className="navTag">Know More</button></Link>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default ProductPage