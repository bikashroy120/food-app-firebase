import React from "react";
import { Link } from "react-router-dom";
import logo from "../componets/img/logo.png";
import {
  FaPhoneAlt,
} from "react-icons/fa";
import { GrAppleAppStore, GrGooglePlay } from "react-icons/gr";
import { MdLocationPin, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-slate-500 mt-14 px-4 md:mt-20 md:px-16 w-full  py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 " >
        <div className="">
          <Link to="/" className=" flex items-center gap-2 mb-3">
            <img src={logo} className="w-8 object-cover" alt="" />
            <p className=" text-xl font-bold">city</p>
          </Link>
          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fuga
              repellat nihil illo atque debitis.
            </p>
        </div>
        <div className=" flex flex-col">
            <div className="fhead mb-3">
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

        <div className="">
          <div className="fsingle">
            <div className="fhead mb-3">
              <h4>CONTACT US</h4>
            </div>
            <div className={`fcontent`}>
              <ul className="">
                <li>
                    Chardike Limited, Floor 11 (Lift 10), 163-164, Sonargaon
                    Road, Hatirpool, Dhaka 1205
                </li>
                <li>
                    Email: support@chardike.com
                </li>
                <li>
                    Support: 01790-270066
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="fsingle">
            <div className="fhead mb-3">
              <h4>Download Our App</h4>
            </div>
            <div className="fcontent">
              <div className="social">
              
                  <GrAppleAppStore />
              
               
                  <GrGooglePlay />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
