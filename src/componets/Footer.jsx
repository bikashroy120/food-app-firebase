import React from "react";
import { Link } from "react-router-dom";
import logo from "../componets/img/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrAppleAppStore, GrGooglePlay } from "react-icons/gr";
import { MdLocationPin, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-slate-500  py-5">
      <div className="flex container items-start justify-between gap-10 p-5">
        <div className="flex-1">
          <Link to="/" className=" flex items-center gap-2">
            <img src={logo} className="w-8 object-cover" alt="" />
            <p className=" text-xl font-bold">city</p>
          </Link>
          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fuga
              repellat nihil illo atque debitis.
            </p>
        </div>
        <div className="flex-1 flex flex-col">
        <div className="fhead">
              <h4>CONTACT US</h4>
            </div>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Manu</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <div className="fsingle">
            <div className="fhead">
              <h4>CONTACT US</h4>
            </div>
            <div className={`fcontent`}>
              <ul className="">
                <li>
                  <a>
                    <span>
                      <MdLocationPin />{" "}
                    </span>{" "}
                    Chardike Limited, Floor 11 (Lift 10), 163-164, Sonargaon
                    Road, Hatirpool, Dhaka 1205
                  </a>
                </li>
                <li>
                  <a>
                    <span>
                      <MdEmail />
                    </span>{" "}
                    Email: support@chardike.com
                  </a>
                </li>
                <li>
                  <a>
                    <span>
                      <FaPhoneAlt />
                    </span>{" "}
                    Support: 01790-270066
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="fsingle">
            <div className="fhead">
              <h4>Download Our App</h4>
            </div>
            <div className="fcontent">
              <div className="social">
                <a href="">
                  <GrAppleAppStore />
                </a>
                <a href="">
                  <GrGooglePlay />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
