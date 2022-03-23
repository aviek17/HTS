import React , {useState} from 'react'
import "../Styles/ContactUs.css"

const ContactUs = () => {
    const [user, setUser] = useState({
        name : "",
        phone : "",
        email : "",
        address : "",
        message : ""
    })

    let name , value
    const handleInputs = (event) => {
        name = event.target.name
        value = event.target.value

        setUser({ ...user, [name]: value })

    }

    const sendData = (event) => {
        // event.preventDefault();
        console.log(user.name)
        console.log(user.phone)
        console.log(user.email)
        console.log(user.address)
        console.log(user.message)

        // Write code here to send data to backend
    }
    return (
        
        <>


            <section className="contact">
                <div className="contactContent">
                    <h2>Contact Us</h2>
                    <p>HT Switchgears, an ISO 9001-2008 and ABB certified company specialized in manufacturing of Custom Built Low & Medium Voltage Switchgears Services.</p>
                </div>
                <div className="contactContainer">
                    <div className="contactInfo">
                        <div className="boxContact">
                            <div className="Icon">
                                <box-icon name='location-plus' type='solid' flip='horizontal' animation='burst' ></box-icon>
                            </div>
                            <div className="textContact">
                                <h3>Office Location</h3>
                                <p>Survey No. 77/5, Dangat Estate, NDA Road, <p /> <p>
                                    A/P - Shivane, Tal. Haveli</p> <p> Dist. Pune - Maharashtra </p> INDIA ,
                                    411023</p>
                                {/* <p><Link to={{pathname:"https://goo.gl/maps/21a6GJxw3V2dnZPW8"}} target="_blank"><img src={map} alt="" height="150px" width="280px" /></Link></p> */}
                            </div>
                        </div>
                        <div className="boxContact">
                            <div className="Icon">
                                <box-icon name='phone' type='solid' animation='tada' flip='vertical' ></box-icon>
                            </div>
                            <div className="textContact">
                                <h3>Contact Number</h3>
                                <p>+91 20 6529 55/ 6/ 7/ 8</p>
                            </div>
                        </div>
                        <div className="boxContact">
                            <div className="Icon">
                                <box-icon name='envelope' animation='burst' ></box-icon>
                            </div>
                            <div className="textContact">
                                <h3>Email Address</h3>
                                <p><span>marketing@htswitchgears.com</span></p>
                            </div>
                        </div>

                    </div>

                    <div className="contactForm">
                        <form >
                            <h2>Get In Touch...</h2>
                            <div className="inputBox">
                                <span>Full Name</span>
                                <input type="text" name="name" id="name" required class="form-control" placeholder="Full Name"  value={user.name}  onChange={handleInputs} />
                                <span>Phone</span>
                                <input type="number" name="phone" id="phone" required class="form-control" placeholder="Your Phone" value={user.phone}  onChange={handleInputs}  />
                            </div>
                            <div className="inputBox">
                                <span>Email</span>
                                <input type="email" name="email" id="email" required class="form-control" placeholder="Your Email" value={user.email}  onChange={handleInputs}  />
                            </div>
                            <div className="inputBox">
                                <span>Address</span>
                                <input type="text" name="address" id="address" required class="form-control" placeholder="Your Address" value={user.address}  onChange={handleInputs}  />
                            </div>
                            <div className="inputBox">
                                <span>Message</span>
                                <textArea required class="form-control" placeholder="Enter your message" name="message" id="message" value={user.message}  onChange={handleInputs} ></textArea>
                            </div>

                            <div className="inputBox">
                                <input  name="Address" required class="form-control btn btn-primary" value="Send Message" onClick={sendData}/>
                            </div>

                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ContactUs