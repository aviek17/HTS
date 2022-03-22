import React, { useState } from 'react'
import "../Styles/Approvals.css"
import Carousel from "../Components/Carousell"
import ReactPaginate from "react-paginate"

const Approvals = () => {
    

    return (
        <>
       

            <div className="titleApproval">
                <h2>Our Approvals</h2>
            </div>

            <div className="approvalDesign">
                <div className="card cardApproval">
                    <div className="approvalText">
                        <p>
                            <span> ||` </span>Gujarat Water Supply & Sewerage Board (GWSSB)  <br /><br />
                            <span> ||` </span>Gujrat Water Infrastructure Limited (GWIL) <br /><br />
                            <span> ||` </span>Gujrat Energy Transmission Corporation Limited (GENCO) <br /><br />
                            <span> ||` </span> Public Health Engineering Dept. (Phed-Rajsthan)<br /><br />
                            <span> ||` </span> Maharashtra Jeevan Pradikaran (MJP)<br /><br />
                            <span> ||` </span>Delhi Jal Board <br /><br />
                            <span> ||` </span> Odisha –Mega Lift Irrigation<br /><br />
                            <span> ||` </span> Department Of Water Resource, Govt of Odisha<br /><br />
                        </p>
                    </div>
                </div>
                <div className="circle">

                </div>
                <div className="card cardApproval">
                    <div className="approvalText">
                        <p>
                            <span> ||` </span>Telangana Lift Irrigation <br /><br />
                            <span> ||` </span> Government Of Telangana I & CAD Department<br /><br />
                            <span> ||` </span>Telangana State Power Generation Corporation Limited (TSGENCO) <br /><br />
                            <span> ||` </span> Andhra Pradesh State Irrigation Development Corporation (APSIDC)<br /><br />
                           
                            <span> ||` </span> Kerala State Electricity Board (KSEB)<br /><br />
                            <span> ||` </span> Maharashtra Industrial Development Corporation (MIDC)<br /><br />
                            <span> ||` </span> Karnataka Neeravari Nigam Ltd (KNNL)<br /><br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="approvalDesign">
                <div className="card cardApprovals">
                    <div className="approvalText">
                        <p>
                            <span> ||` </span> Sardar sarovar Narmada Nigam Ltd. (SSNL) <br /><br />
                            <span> ||` </span>Krishna Bhagya Jala Nigam Ltd. (KBJNL) <br /><br />
                            <span> ||` </span>Narmada Valley Development Authority (NVDA) <br /><br />
                            <span> ||` </span> Karnataka Urban Water Supply and Drainage Board. (KUWSDB)<br /><br />
                            <span> ||` </span>Water Resource Department of Madhya Pradesh (MPWRD) <br /><br />
                            <span> ||` </span> Government Of Odisha, Panchayati raj and Drinking Water Department<br /><br />
                            <span> ||` </span> Public Works Department, Government Of GOA<br /><br />
                            <span> ||` </span>Government of Tamil Nadu, Public Works Department (PWD) <br /><br />
                        </p>
                    </div>
                </div>
                <div className="circle">

                </div>
                <div className="card cardApprovals">
                    <div className="approvalText">
                        <p>
                            <span> ||` </span>Government Of Andhra Pradesh, RWS & S Department <br /><br />
                            <span> ||` </span>Government Of Bihar Water Resource Department <br /><br />
                            <span> ||` </span>City and Industrial Development Corporation of Maharashtra (CIDCO) <br /><br />
                            <span> ||` </span> National Mineral Development Corporation (NMDC)<br /><br />
                            <span> ||` </span>Karnataka Urban Infrastructure Development and Finance Corporation (KUIFC) <br /><br />
                            <span> ||` </span>Minor irrigation Department, Govt of Karnataka <br /><br />
                            <span> ||` </span> National Highway & Infrastructure Development Co. Ltd.<br /><br />
                            
                        </p>
                    </div>
                </div>
            </div>
            <div className="approvalDesign">
                <div className="card cardApproval">
                    <div className="approvalText">
                        <p>
                            <span> ||` </span> Water resource department of Maharashtra <br /><br />
                            <span> ||` </span> Gujarat Industrial Development Corporation (GIDC)<br /><br />
                            <span> ||` </span>TUV India Pvt Ltd.  <br /><br />
                            <span> ||` </span> MITCON Consultancy & Engineering Services<br /><br />
                            <span> ||` </span> Tata Consulting Engineers Limited, Gandhinagar<br /><br />
                            <span> ||` </span> Multi Man-tech International Private Limited<br /><br />
                            <span> ||` </span> SGS Consultant<br /><br />
                            <span> ||` </span> Avant-Garde Engineers and Consultant (P) Ltd.<br /><br />
                        </p>
                    </div>
                </div>
                <div className="circle">

                </div>
                <div className="card cardApproval">
                    <div className="approvalText">
                        <p>
                            <span> ||` </span> Rail India Technical and Economic Service (RITES)<br /><br />
                            <span> ||` </span> WAPCOS Limited<br /><br />
                            <span> ||` </span> UBTECH Consulting Engineers.<br /><br />
                            <span> ||` </span> Vasant Dada Patil Sugar Institute, Pune<br /><br />
                            <span> ||` </span> Archivista Engineering Project Private Limited<br /><br />
                            <span> ||` </span> Dr. BE Kushare & Associates<br /><br />
                            <span> ||` </span> Manohar Consulting Engineers, Pune<br /><br />
                            <span> ||` </span> Mecon Ltd, Delhi<br /><br />
                        </p>
                    </div>
                </div>
            </div><div className="approvalDesign">
                <div className="card cardApproval1">
                    <div className="approvalText">
                        <p>
                            <span> ||` </span> Aarvee Consultant <br /><br />
                            <span> ||` </span> Anuprabha Consulting Engineers<br /><br />
                            <span> ||` </span>Blue-stream Infrastructure Development Consultant Pvt. Ltd. <br /><br />
                            <span> ||` </span> Worley parsons <br /><br />
                            <span> ||` </span> Integrated Engineering<br /><br />
                            <span> ||` </span>Andhra Pradesh Power Generation Corporation Limited (APGENCO) <br /><br />
                        </p>
                    </div>
                </div>
                <div className="circle  ">

                </div>
                <div className="card cardApproval1">
                    <div className="approvalText">
                        <p>
                            <span> ||` </span> Technomen Consultants, Gandhinagar<br /><br />
                            <span> ||` </span>Siddhi Consulting Engineers Pvt Ltd, Pune <br /><br />
                            <span> ||` </span> MaRS Planning & Engineering Services Pvt. Ltd.<br /><br />
                            <span> ||` </span> Procem Engineers (I) Pvt. Ltd., Pune<br /><br />
                            <span> ||` </span> TUV SUD SOUTH ASIA PVT. LTD<br /><br />
                            <span> ||` </span> Narmada water resource & kalpsar department (Gujrat)<br /><br />
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Approvals