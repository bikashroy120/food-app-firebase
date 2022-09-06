import React, { useState } from "react";
import logo from "../componets/img/logo.png";
import { FaShoppingBasket } from "react-icons/fa";
import avater from "../componets/img/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useStateValue } from "../contex/stateProvider";
import { actionType } from "../contex/reducer";
import { GrAdd, GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {cartActions} from '../store/Cart/cart-slice'

const Header = () => {
  const [{ user,cartShow }, dispatch] = useStateValue();
  const cartItems = useSelector((state)=>state.cart.itemList);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [isMount, setMount] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setMount(!isMount);
    }
  };

  const logOut=()=>{
    setMount(false)
    localStorage.clear()
    dispatch({
      type: actionType.SET_USER,
      user:null,
    })
  }

  const setShowCarts =()=>{
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: true,
    });
  }

  return (
    <div className="fixed w-screen bg-[#F5F4F4] z-50 p-3 px-6 md:p-6 md:px-16">
      {/* Destap Devices */}
      <div className="hidden md:flex w-full h-full">
        <Link to="/" className=" flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt="" />
          <p className=" text-xl font-bold">city</p>
        </Link>

        <motion.ul initial={{opacity:0,x:200}} animate={{opacity:1,x:0}} exit={{opacity:0,x:200}}  className="flex items-center gap-5 ml-auto">
          <li className=" text-sm font-normal cursor-pointer">Home</li>
          <li className=" text-sm font-normal cursor-pointer">Manu</li>
          <li className=" text-sm font-normal cursor-pointer">About us</li>
          <li className=" text-sm font-normal cursor-pointer">Services</li>
        </motion.ul>

        <div className="flex items-center justify-center relative" onClick={setShowCarts}>
          <FaShoppingBasket className=" text-2xl cursor-pointer ml-4" />
          <p className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold text-white">
            {cartItems.length}
          </p>
        </div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            className="w-8 min-w-[40px] h-8 min-h-[40px] cursor-pointer ml-5 drop-shadow-xl rounded-full"
            src={user ? user.photoURL : avater}
            alt=""
            onClick={login}
          />

          {isMount && (
            <motion.div initial={{opacity:0,scale:0.6}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.6}} className="w-40 absolute shadow-xl bg-gray-50 top-12 right-0">
              <Link to='/creactItem'><p className=" px-4 py-2 cursor-pointer flex items-center font-normal hover:bg-slate-100 transition-all duration-100 ease-in-out text-base" onClick={()=>setMount(false)}>
                Creact Item
                <GrAdd className="pl-1" />
              </p></Link>
              <p className=" px-4 py-2 cursor-pointer flex items-center font-normal hover:bg-slate-100 transition-all duration-100 ease-in-out text-base" onClick={logOut}>
                Log Out
                <GrLogout className="pl-1" />
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modile Devices */}
      <div className="flex justify-between items-center md:hidden w-full h-full">


      <div className="flex items-center justify-center relative" onClick={setShowCarts}>
          <FaShoppingBasket className=" text-2xl cursor-pointer ml-4" />
          <p className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold text-white">
            {cartItems.length}
          </p>
        </div>


        <Link to="/" className=" flex items-center gap-2">
            <img src={logo} className="w-8 object-cover" alt="" />
            <p className=" text-xl font-bold">city</p>
          </Link>

          <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            className="w-8 min-w-[40px] h-8 min-h-[40px] cursor-pointer ml-5 drop-shadow-xl rounded-full"
            src={user ? user.photoURL : avater}
            alt=""
            onClick={login}
          />

          {isMount && (
            <motion.div initial={{opacity:0,scale:0.6}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.6}} className="w-40 absolute shadow-xl bg-gray-50 top-12 right-0">
              <p className=" px-4 py-1 cursor-pointer flex items-center font-normal hover:bg-slate-100 transition-all duration-100 ease-in-out text-base">
                Creact Item
                <GrAdd className="pl-1" />
              </p>

              <ul className="flex flex-col">
                <li className=" px-4 py-1  text-md font-normal cursor-pointer">Home</li>
                <li className="px-4 py-1  text-md font-normal cursor-pointer">Manu</li>
                <li className="px-4 py-1  text-md font-normal cursor-pointer">About us</li>
                <li className="px-4 py-1  text-md font-normal cursor-pointer">Services</li>
              </ul>

              <p className=" px-4 py-2 m-2 cursor-pointer flex bg-gray-100 shadow-md items-center font-normal hover:bg-slate-100 transition-all duration-100 ease-in-out text-base" onClick={logOut}>
                Log Out
                <GrLogout className="pl-1" />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
