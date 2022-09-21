import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebaseConfig'
import { collection, doc, getDocs, orderBy, query, setDoc,where } from "firebase/firestore"; 
import {firestore} from '../firebaseConfig'
import { useStateValue } from "../contex/stateProvider";
import { actionType } from "../contex/reducer";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../store/Order/order-actions";
import { useDispatch } from "react-redux";


const Login = () => {
  const [state, setstate] = useState(false);
  const [{ user,cartShow }, dispatch] = useStateValue();
  const navigate = useNavigate()
  const dis  = useDispatch()
  const HandelSubmit = async (e)=>{
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        const getQuery = async (id)=>{
          const items = await getDocs(
              query(collection(firestore,"user"),where("uid", "==", id))
          );

          const data = items.docs.map((doc)=> doc.data())
          dispatch({
            type: actionType.SET_USER,
            user: items.docs.map((doc)=> doc.data()),
          });
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/")
          dis(getUserData(user.uid))
      }

      getQuery(user.uid)
        
      })
      .catch((error) => {
        console.log(error)
      });



}







  const trogalButton = (e) => {
    e.preventDefault();
    setstate((prevState) => !prevState);
  };
  return (
    <div className="w-full h-[85vh] flex items-center justify-center">
      <div className=" bg-orange-200 p-5 shadow-md w-[500px]">
        <h1 className="text-[25px] font-normal py-4">Log In</h1>
        <form
          onSubmit={HandelSubmit}
          className="flex items-center justify-center flex-col w-full"
        >
          <input
            className="w-full mb-2 p-2 rounded-md"
            type="email"
            placeholder="Enter Your Email"
          />
          <div className="w-full relative">
          <input
            className="w-full mb-2 p-2 rounded-md"
            type={state?"text":"password"}
            placeholder="Enter Your Password"
          />
          <button className=" absolute top-2 right-1 text-[25px]" onClick={trogalButton}>
            {state ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
          </div>
          <button
            className="w-full bg-orange-500 text-white py-2 rounded-md mt-4"
            type="submit"
          >
            Log In
          </button>
        </form>

        <div className="mt-1">
          <p className=" cursor-pointer">Forget PassWord</p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <div className="w-full h-1 bg-slate-400"></div>
          <p>or</p>
          <div className="w-full h-1 bg-slate-400"></div>
        </div>

        <p className="text-[13px] text-center my-4">
          By signing up, you agree to Chardike's Terms of services & Privacy
          Policy
        </p>
        <p className="text-[18px] text-center my-4">
          New to chardike?{" "}
          <span className=" text-red-500 cursor-pointer">Sing up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
