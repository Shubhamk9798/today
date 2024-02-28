import React from "react";
import logo from "../assets/logo ssq.jpg";
import facebook from "../assets/facebook.png";
import whattsup from "../assets/whattsup.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import "./Footermain.css";
import Image from "next/image";
import Link from "next/link";
Link;

const Footermain = () => {
  return (
    <div className="main-footer">
      <div className="main-flex-footer">
        <div className="foot-1">
          <Image className="logo-social" src={logo} alt="" />
          <p className="des-f">
            ssqareIT is an Training and Premium placement institute which
            provides career options in IT Started in 2019 have 1300+ companies
            Tieup for placement
          </p>
        </div>
        <div className="foot-2">
          <div>
            <h1 className="heading-footer">Education</h1>
          </div>
          <ul className="links-container-Footer">
            <li className="links-footer">
              <Link href="/Mean-stack">Mern Stack</Link>
            </li>
            <li className="links-footer">
              <Link href="/Mean-stack">Mean Stack</Link>
            </li>
            <li className="links-footer">
              <p>Software Testing</p>
            </li>
          </ul>
        </div>
        <div className="foot-3">
          <div>
            <h1 className="heading-footer">Quick Links</h1>
          </div>
          <ul className="links-container-Footer">
            <li className="links-footer">
              <Link href="/">Home</Link>
            </li>
            <li className="links-footer">
              <Link href="/Aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="foot-4">
          <div className="flex-social">
            <div className="flex-social">
              <a
                href="https://www.instagram.com/shubhamshrivas.ssquareit/"
                target="_blank"
              >
                <div>
                  <Image
                    className="img-footer cursor-pointer hover:scale-125 ease-in-out duration-300"
                    src={instagram}
                    alt=""
                  />
                </div>
              </a>
              <a href="https://wa.me/+919011384921" target="_blank">
                <div>
                  <Image
                    className="img-footer cursor-pointer hover:scale-125 ease-in-out duration-300"
                    src={whattsup}
                    alt=""
                  />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@ssquareitsolutions9314"
                target="_blank"
              >
                <div>
                  <Image
                    className="img-footer cursor-pointer hover:scale-125 ease-in-out duration-300"
                    src={youtube}
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footermain;
