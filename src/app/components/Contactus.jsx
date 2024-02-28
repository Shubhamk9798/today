import React from "react";
import "./Contactus.css";
import clogo1 from "../assets/customer.png";
import clogo2 from "../assets/letter.png";
import clogo3 from "../assets/location.png";

import Image from "next/image";
const Contactus = () => {
  return (
    <>
      <section>
        <h1 id="Contactus" className="header-c">
          Contact Us
        </h1>
        <div className="wrapper">
          <div className="left-c">
            <form
              className="form-main"
              action="https://formsubmit.co/c4f5b2cffb6b336fb6c32f1446a90890"
              method="POST"
            >
              <h1></h1>
              <input type="hidden" name="_captcha" value="false"></input>
              <div className="main">
                <input type="hidden" name="_template" value="table"></input>
                <a
                  href="https://formsubmit.co/el/{custom-link}/?next=https://yourdomain.co/thanks.html"
                  target="_blank"
                >
                  Email us
                </a>
                <input
                  type="text"
                  className="field"
                  name="Name"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  className="field"
                  name="Email"
                  placeholder="Email"
                  required
                />
                <textarea
                  name="Message"
                  className="field-area"
                  placeholder="Message"
                  required
                ></textarea>
                <button className="btn-contact" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="Right-c">
            <h1 className="heading-info">Contact Info</h1>
            <div className="wrapper-c">
              <div>
                <Image className="c-logo" src={clogo1} alt="clogo" />
              </div>
              <div>
                <p className="flex-wrap">+917020103785</p>
                <p className="flex-wrap">+918983792128</p>
              </div>
            </div>
            <div className="wrapper-c">
              <div>
                <Image className="c-logo" src={clogo2} alt="clogo" />
              </div>
              <div>
                <p className="flex-wrap">ssquareitsolutionspune@gmail.com</p>
              </div>
            </div>
            <div className="wrapper-c">
              <div>
                <Image className="c-logo2" src={clogo3} alt="clogo" />
              </div>
              <div>
                <p className="flex-wrap">
                  S-101,A Wing,Harihareshwar Park,Near Nawale Hospital Back
                  Gate,Narhe-Dhayri Road,Pune-41
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contactus;
