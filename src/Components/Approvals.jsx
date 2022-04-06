// import React, { useState } from 'react'
// import "../Styles/Approvals.css"
// import Carousel from "../Components/Carousell"
// import ReactPaginate from "react-paginate"

// const Approvals = () => {


//     return (
//         <>


//             <div className="titleApproval">
//                 <h2>Our Approvals</h2>
//             </div>

//             {/* <div className="approvalDesign">
//                 <div className="card cardApproval">
//                     <div className="approvalText">
//                         <p>
//                             <span> ● </span>Gujarat Water Supply & Sewerage Board (GWSSB)  <br className="br" />
//                             <span> ● </span>Gujrat Water Infrastructure Limited (GWIL) <br />
//                             <span> ● </span>Gujrat Energy Transmission Corporation Limited (GENCO) <br />
//                             <span> ● </span>Public Health Engineering Dept. (Phed-Rajsthan)<br />

//                         </p>
//                     </div>
//                 </div>
//                 <div className="circle">

//                 </div>
//                 <div className="card cardApproval">
//                     <div className="approvalText">
//                         <p>
//                             <span> ● </span>Telangana Lift Irrigation <br /><br />
//                             <span> ● </span> Government Of Telangana I & CAD Department<br /><br />
//                             <span> ● </span>Telangana State Power Generation Corporation Limited (TSGENCO) <br /><br />
//                             <span> ● </span> Andhra Pradesh State Irrigation Development Corporation (APSIDC)<br /><br />

//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="approvalDesign">
//                 <div className="card cardApprovals">
//                     <div className="approvalText">
//                         <p>
//                             <span> ● </span> Sardar sarovar Narmada Nigam Ltd. (SSNL) <br /><br />
//                             <span> ● </span>Krishna Bhagya Jala Nigam Ltd. (KBJNL) <br /><br />
//                             <span> ● </span>Narmada Valley Development Authority (NVDA) <br /><br />
//                             <span> ● </span> Karnataka Urban Water Supply and Drainage Board. (KUWSDB)<br /><br />
//                             <span> ● </span>Water Resource Department of Madhya Pradesh (MPWRD) <br /><br />
//                             <span> ● </span> Government Of Odisha, Panchayati raj and Drinking Water Department<br /><br />
//                             <span> ● </span> Public Works Department, Government Of GOA<br /><br />
//                             <span> ● </span>Government of Tamil Nadu, Public Works Department (PWD) <br /><br />
//                         </p>
//                     </div>
//                 </div>
//                 <div className="circle">

//                 </div>
//                 <div className="card cardApprovals">
//                     <div className="approvalText">
//                         <p>
//                             <span> ● </span>Government Of Andhra Pradesh, RWS & S Department <br /><br />
//                             <span> ● </span>Government Of Bihar Water Resource Department <br /><br />
//                             <span> ● </span>City and Industrial Development Corporation of Maharashtra (CIDCO) <br /><br />
//                             <span> ● </span> National Mineral Development Corporation (NMDC)<br /><br />
//                             <span> ● </span>Karnataka Urban Infrastructure Development and Finance Corporation (KUIFC) <br /><br />
//                             <span> ● </span>Minor irrigation Department, Govt of Karnataka <br /><br />
//                             <span> ● </span> National Highway & Infrastructure Development Co. Ltd.<br /><br />

//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="approvalDesign">
//                 <div className="card cardApproval">
//                     <div className="approvalText">
//                         <p>
//                             <span> ● </span> Water resource department of Maharashtra <br /><br />
//                             <span> ● </span> Gujarat Industrial Development Corporation (GIDC)<br /><br />
//                             <span> ● </span>TUV India Pvt Ltd.  <br /><br />
//                             <span> ● </span> MITCON Consultancy & Engineering Services<br /><br />
//                             <span> ● </span> Tata Consulting Engineers Limited, Gandhinagar<br /><br />
//                             <span> ● </span> Multi Man-tech International Private Limited<br /><br />
//                             <span> ● </span> SGS Consultant<br /><br />
//                             <span> ● </span> Avant-Garde Engineers and Consultant (P) Ltd.<br /><br />
//                         </p>
//                     </div>
//                 </div>
//                 <div className="circle">

//                 </div>
//                 <div className="card cardApproval">
//                     <div className="approvalText">
//                         <p>
//                             <span> ● </span> Rail India Technical and Economic Service (RITES)<br /><br />
//                             <span> ● </span> WAPCOS Limited<br /><br />
//                             <span> ● </span> UBTECH Consulting Engineers.<br /><br />
//                             <span> ● </span> Vasant Dada Patil Sugar Institute, Pune<br /><br />
//                             <span> ● </span> Archivista Engineering Project Private Limited<br /><br />
//                             <span> ● </span> Dr. BE Kushare & Associates<br /><br />
//                             <span> ● </span> Manohar Consulting Engineers, Pune<br /><br />
//                             <span> ● </span> Mecon Ltd, Delhi<br /><br />
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="approvalDesign">
//                 <div className="card cardApproval1">
//                     <div className="approvalText">
//                         <p>
//                             <span> ● </span> Aarvee Consultant <br /><br />
//                             <span> ● </span> Anuprabha Consulting Engineers<br /><br />
//                             <span> ● </span>Blue-stream Infrastructure Development Consultant Pvt. Ltd. <br /><br />
//                             <span> ● </span> Worley parsons <br /><br />
//                             <span> ● </span> Integrated Engineering<br /><br />
//                             <span> ● </span>Andhra Pradesh Power Generation Corporation Limited (APGENCO) <br /><br />
//                         </p>
//                     </div>
//                 </div>
//                 <div className="circle  ">

//                 </div>
//                 <div className="card cardApproval1">
//                     <div className="approvalText">
//                         <p>
//                             <span> ● </span> Technomen Consultants, Gandhinagar<br /><br />
//                             <span> ● </span>Siddhi Consulting Engineers Pvt Ltd, Pune <br /><br />
//                             <span> ● </span> MaRS Planning & Engineering Services Pvt. Ltd.<br /><br />
//                             <span> ● </span> Procem Engineers (I) Pvt. Ltd., Pune<br /><br />
//                             <span> ● </span> TUV SUD SOUTH ASIA PVT. LTD<br /><br />
//                             <span> ● </span> Narmada water resource & kalpsar department (Gujrat)<br /><br />
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="approvalDesign">
//                 <div className="card cardApproval1">
//                     <div className="approvalText">
//                         <p>
//                             <span> ● </span>Maharashtra Jeevan Pradikaran (MJP)<br />
//                             <span> ● </span>Delhi Jal Board <br />
//                             <span> ● </span>Odisha –Mega Lift Irrigation<br />
//                             <span> ● </span>Department Of Water Resource, Govt of Odisha<br />
//                         </p>
//                     </div>
//                 </div>
//                 <div className="circle  ">

//                 </div>
//                 <div className="card cardApproval1">
//                     <div className="approvalText">
//                         <p>

//                             <span> ● </span> Kerala State Electricity Board (KSEB)<br /><br />
//                             <span> ● </span> Maharashtra Industrial Development Corporation (MIDC)<br /><br />
//                             <span> ● </span> Karnataka Neeravari Nigam Ltd (KNNL)<br /><br />
//                         </p>
//                     </div>
//                 </div>
//             </div> */}



//         </>
//     )
// }

// export default Approvals



import React, { useState } from 'react'
import "../Styles/Approvals.css"
import Carousel from "../Components/Carousell"
import ReactPaginate from "react-paginate"

const Approvals = () => {
    const data = [
        {
            id: 1,
            name: "Gujarat Water Supply & Sewerage Board (GWSSB)"
        },
        {
            id: 2,
            name: "Gujrat Water Infrastructure Limited (GWIL)"
        },
        {
            id: 3,
            name: "Gujrat Energy Transmission Corporation Limited (GENCO)"
        },
        {
            id: 4,
            name: "Public Health Engineering Dept. (Phed-Rajsthan)"
        },
        {
            id: 5,
            name: "Maharashtra Jeevan Pradikaran (MJP)"
        },
        {
            id: 6,
            name: "Delhi Jal Board"
        },
        {
            id: 7,
            name: "Odisha –Mega Lift Irrigation"
        },
        {
            id: 8,
            name: "Department Of Water Resource, Govt of Odisha"
        },
        {
            id: 9,
            name: "Blue-stream Infrastructure Development Consultant Pvt. Ltd."
        },
        {
            id: 10,
            name: "Government Of Telangana I & CAD Department"
        },
        {
            id: 11,
            name: "Telangana State Power Generation Corporation Limited (TSGENCO)"
        },
        {
            id: 12,
            name: " Andhra Pradesh State Irrigation Development Corporation (APSIDC)"
        },
        {
            id: 13,
            name: "Andhra Pradesh Power Generation Corporation Limited (APGENCO)"
        }
        , {
            id: 14,
            name: "Kerala State Electricity Board (KSEB)"
        },
        {
            id: 15,
            name: "Maharashtra Industrial Development Corporation (MIDC)"
        },
        
        {
            id: 17,
            name: "Sardar sarovar Narmada Nigam Ltd. (SSNL)"
        },
        {
            id: 18,
            name: "Krishna Bhagya Jala Nigam Ltd. (KBJNL)"
        },
        {
            id: 19,
            name: "Narmada Valley Development Authority (NVDA)"
        },
        {
            id: 20,
            name: "Karnataka Urban Water Supply and Drainage Board. (KUWSDB)"
        },
        {
            id: 21,
            name: "Water Resource Department of Madhya Pradesh (MPWRD)"
        },
        {
            id: 22,
            name: "Government Of Odisha, Panchayati raj and Drinking Water Department"
        },
        {
            id: 23,
            name: "Public Works Department, Government Of GOA"
        },
        {
            id: 24,
            name: "Government of Tamil Nadu, Public Works Department (PWD)"
        },
        {
            id: 25,
            name: "Government Of Andhra Pradesh, RWS & S Department"
        },
        {
            id: 26,
            name: "Government Of Bihar Water Resource Department"
        },
        {
            id: 27,
            name: "City and Industrial Development Corporation of Maharashtra (CIDCO)"
        }
        , {
            id: 28,
            name: "National Mineral Development Corporation (NMDC)"
        },
       
        
    ];
    const dataOne = [
        {
            id: 16,
            name: "Karnataka Neeravari Nigam Ltd (KNNL)"
        },
        {
            id: 29,
            name: "Karnataka Urban Infrastructure Development and Finance Corporation (KUIFC)"
        },
        
        {
            id: 30,
            name: "Minor irrigation Department, Govt of Karnataka"
        },
        {
            id: 31,
            name: "National Highway & Infrastructure Development Co. Ltd."
        },
        {
            id: 32,
            name: "Narmada water resource & kalpsar department (Gujrat)"
        },
        {
            id: 33,
            name: "Water resource department of Maharashtra"
        },
        {
            id: 34,
            name: "Gujarat Industrial Development Corporation (GIDC)"
        },
        {
            id: 35,
            name: "TUV India Pvt Ltd. "
        },
        {
            id: 36,
            name: "MITCON Consultancy & Engineering Services"
        },
        {
            id: 37,
            name: "Tata Consulting Engineers Limited, Gandhinagar"
        },
        {
            id: 38,
            name: "Multi Man-tech International Private Limited"
        },
        {
            id: 39,
            name: "SGS Consultant"
        },
        {
            id: 40,
            name: "Avant-Garde Engineers and Consultant (P) Ltd."
        },
        {
            id: 41,
            name: "Rail India Technical and Economic Service (RITES)"
        },
        {
            id: 42,
            name: "WAPCOS Limited"
        }
        , {
            id: 43,
            name: "UBTECH Consulting Engineers."
        },
        {
            id: 44,
            name: "Vasant Dada Patil Sugar Institute, Pune"
        },
        {
            id: 45,
            name: "Archivista Engineering Project Private Limited"
        },
        {
            id: 46,
            name: "Dr. BE Kushare & Associates"
        },
        {
            id: 47,
            name: "Manohar Consulting Engineers, Pune"
        },
        {
            id: 48,
            name: "Mecon Ltd, Delhi"
        },
        {
            id: 49,
            name: "Aarvee Consultant"
        },
        {
            id: 50,
            name: "Anuprabha Consulting Engineers"
        },
        {
            id: 51,
            name: "Telangana Lift Irrigation"
        },
        {
            id: 52,
            name: "Worley parsons "
        },
        {
            id: 53,
            name: "Integrated Engineering"
        },
        {
            id: 54,
            name: "Technomen Consultants, Gandhinagar"
        },
        {
            id: 55,
            name: "Siddhi Consulting Engineers Pvt Ltd, Pune"
        },
        {
            id: 56,
            name: "MaRS Planning & Engineering Services Pvt. Ltd."
        }
        , {
            id: 57,
            name: "Procem Engineers (I) Pvt. Ltd., Pune"
        },
        {
            id: 58,
            name: "TUV SUD SOUTH ASIA PVT. LTD"
        }
    ];

    
    const displayList = data
        .map(value => {
            return (
                <>
                    <li>
                        <p>{value.name}</p>
                    </li>
                </>
            )
        })
        const displayLists = dataOne
        .map(value => {
            return (
                <>
                    <li>
                        <p>{value.name}</p>
                    </li>
                </>
            )
        })
    return (
        <>
            <div className="titleApproval">
                <h2>Our Approvals</h2>
            </div>

            <div className="designApprovals">
                <div className="containerApproval containerApprovals">
                    {/* <h2>Our Approvals</h2> */}
                    <ul className="displayUL">
                        {displayList}
                    </ul>
                </div>
                <div className="containerApproval">
                    {/* <h2>Our Approvals</h2> */}
                    <ul className="displayUL">
                        {displayLists}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Approvals