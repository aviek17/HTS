import React from 'react'
import l1 from "../Logo/l1.jpg"
import l2 from "../Logo/l2.jpg"
import l3 from "../Logo/l3.jpg"
import l4 from "../Logo/l4.png"
import l5 from "../Logo/l5.jpg"

import l7 from "../Logo/l7.jpg"

import l9 from "../Logo/l9.png"
import l10 from "../Logo/l10.jpg"
import l11 from "../Logo/l11.jpg"
import l12 from "../Logo/l12.jpg"
import l13 from "../Logo/l13.jpg"
import l14 from "../Logo/l14.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../Styles/HomeClient.css"
import { NavLink} from 'react-router-dom'
const data = [
    {
        id: 1,
        src: l1,

    }, {
        id: 2,
        src: l2,

    }, {
        id: 3,
        src: l3,

    }, {
        id: 4,
        src: l4,

    },
    {
        id: 5,
        src: l5,

    },

    {
        id: 7,
        src: l7,

    },

    {
        id: 9,
        src: l9,

    }, {
        id: 10,
        src: l10,

    }, {
        id: 11,
        src: l11,

    }, {
        id: 12,
        src: l12,

    }, {
        id: 13,
        src: l13,

    }, {
        id: 14,
        src: l14,

    }
]

const HomeClient = () => {
    return (
        <>
            <div>
                <h1 className="clientTitle" data-aos="fade-down">Our Clients</h1>
                <div className="containerC">
                    <OwlCarousel
                        className='owl-theme'
                        items={5}
                        loop margin={10}
                        nav={true}
                        autoplay={true}
                        autoplayTimeout={2000}
                        autoplayHoverPause={true}
                        responsive={{
                            0: {
                                items: 1,
                                nav: false
                            },
                            600: {
                                items: 2,
                                nav: false,
                            },
                            1000: {
                                items: 3,
                                nav: false,
                            },
                            1200: {
                                items: 5
                            }
                        }}>
                        {
                            data.map(user => {
                                return (

                                    <div className="cardC">
                                        <div className="contentC">
                                            <img src={user.src} alt="" />
                                            {/* <h3>{user.name}</h3> */}
                                            <p></p>
                                        </div>
                                    </div>

                                )
                            }
                            )
                        }
                    </OwlCarousel>



                </div>
                <div className="buttonClient">
                    <button>
                        <NavLink to="/clients">Read More</NavLink>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeClient