import React,{useState} from "react";
import logo from "../componets/img/logo.png";
import { FaShoppingBasket } from "react-icons/fa";
import avater from "../componets/img/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useStateValue } from "../contex/stateProvider";
import { actionType } from "../contex/reducer";
import { GrAdd,GrLogout } from "react-icons/gr";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [isMount,setMount] = useState(false)

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
    }else{
      setMount(!isMount)
    }
  };

  return (
    <div className="fixed w-screen z-50 p-6 px-16">
      {/* Destap Devices */}
      <div className="hidden md:flex w-full h-full">
        <div className=" flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt="" />
          <p className=" text-xl font-bold">city</p>
        </div>

        <ul className="flex items-center gap-5 ml-auto">
          <li className=" text-sm font-normal cursor-pointer">Home</li>
          <li className=" text-sm font-normal cursor-pointer">Manu</li>
          <li className=" text-sm font-normal cursor-pointer">About us</li>
          <li className=" text-sm font-normal cursor-pointer">Services</li>
        </ul>

        <div className="flex items-center justify-center relative">
          <FaShoppingBasket className=" text-2xl cursor-pointer ml-4" />
          <p className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold text-white">
            2
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

          {isMount && <div className="w-40 absolute bg-gray-50 top-12 right-0">
            <p className=" px-4 py-2 cursor-pointer flex items-center font-normal hover:bg-slate-100 transition-all duration-100 ease-in-out text-base">
              Creact Item
              <GrAdd className="pl-1"/>
            </p>
            <p className=" px-4 py-2 cursor-pointer flex items-center font-normal hover:bg-slate-100 transition-all duration-100 ease-in-out text-base">
              Log Out
              < GrLogout className="pl-1"/>
            </p>
          </div>}
        </div>
      </div>

      {/* Modile Devices */}
      <div className="flex md:hidden w-full h-full bg-green-50 p-4"></div>
    </div>
  );
};

export default Header;
