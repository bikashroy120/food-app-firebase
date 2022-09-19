import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import {firestore,storage,auth} from '../firebaseConfig'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loder from "./Loder";


const Regester = () => {

    const [state, setstate] = useState(false);
    const [lodding,setLodding] = useState(false)
    const navigate = useNavigate()

    const HandelSubmit = async (e)=>{
        e.preventDefault()
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = null;
        setLodding(true)
      try{
  
        const res =await createUserWithEmailAndPassword(auth, email, password);
  
  
        const storageRef = ref(storage, 'images/rivers.jpg');
  
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          }, 
          (error) => {
          }, 
          () => {
  
            getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                await updateProfile(res.user,{
                    displayName:name,
                    photoURL:downloadURL
                })
  
                await setDoc(doc(firestore, "user", res.user.uid), {
                  uid:res.user.uid,
                  displayName:name,
                  email,
                  photoURL:null,
                  phone:"",
                  address:"",
                  gender:"",
                  dathBarth:"",
                  country:"",
                });
                setLodding(false)
              navigate("/login")
  
                
            });
          }
        );
  
      }catch(err){
        console.log(err)
      }
  
     
    }

    const trogalButton = (e) => {
      e.preventDefault();
      setstate((prevState) => !prevState);
    };
  return (
    <div className="w-full h-[85vh] flex items-center justify-center">
      <div className=" bg-orange-200 p-5 shadow-md w-[500px]">
        <h1 className="text-[25px] font-normal py-4">Sing Up</h1>
        <form
          onSubmit={HandelSubmit}
          className="flex items-center justify-center flex-col w-full"
        >
          <input
            className="w-full mb-2 p-2 rounded-md"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="w-full mb-2 p-2 rounded-md"
            type="email"
            placeholder="Enter Your Email"
          />
          <div className="w-full relative">
            <input
              className="w-full mb-2 p-2 rounded-md"
              type={state ? "text" : "password"}
              placeholder="Enter Your Password"
            />
            <button
              className=" absolute top-2 right-1 text-[25px]"
              onClick={trogalButton}
            >
              {state ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
          <button
            className="w-full bg-orange-500 text-white py-2 rounded-md mt-4"
            type="submit"
          >
            {lodding? <Loder /> : "Sing Up"}
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
          Have an account?{" "}
          <span className=" text-red-500 cursor-pointer">Log In</span>
        </p>
      </div>
    </div>
  );
};

export default Regester;
