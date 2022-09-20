import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsXLg } from "react-icons/bs";
import avater from "../componets/img/avatar.png";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { firestore, storage } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const ProfileModal = ({ setShow, user }) => {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [contry, setcontry] = useState("");
  const [gender, setgender] = useState("");
  const [barthday, setbarthday] = useState("");
  const [profile, setProfile] = useState();
  const [lodding, setLodding] = useState();

  const HandelSubmit = async (e) => {
    e.preventDefault();
    if (
      address === "" ||
      address === "" ||
      phone === "" ||
      contry === "" ||
      gender === ""
    ) {
      toast.error("Please Fills all Data.");
    } else {
      setLodding(true);
      try {

        const storageRef = ref(storage, `images/${Date.now()}-${profile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, profile);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                const dostoupdate = doc(firestore, "user", user[0]?.uid);
                updateDoc(dostoupdate, {
                  address: address,
                  country: contry,
                  photoURL: downloadURL,
                  dathBarth: barthday,
                  displayName:name,
                  gender:gender,
                  phone:phone,
                })
                  .then((res) => alert("data update"))
                  .catch((err) => alert(err.message));
              }
            );
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const updatettt = ()=>{
      setname(user[0]?.displayName)
      setaddress(user[0]?.address)
      setphone(user[0]?.phone)
      setcontry(user[0]?.country)
      setgender(user[0]?.gender)
      setbarthday(user[0]?.dathBarth)
    };
    updatettt()
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center duration-150">
      <motion.ul
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="w-[800px] h-[650px] bg-white shadow-2xl relative rounded-2xl p-5"
      >
        <button
          onClick={() => setShow(false)}
          className=" absolute right-5 hover:text-red-600 top-5"
        >
          <BsXLg />
        </button>

        <div>
          <h2 className="text-[25px]">Update Profile</h2>
          <p>Manage and protect your account</p>
        </div>

        <div className="px-10">
          <div className="flex items-center justify-center flex-col py-2">
            <img src={avater} alt="" className="w-36 h-36 rounded-full" />
            <input
              type="file"
              id="add"
              style={{ display: "none" }}
              onChange={(e) => setProfile(e.target.files[0])}
            />
            <label
              htmlFor="add"
              className="py-2 px-3 bg-orange-500 text-white cursor-pointer rounded-md mt-1"
            >
              Select image
            </label>
          </div>
          <form onSubmit={HandelSubmit}>
            <input
              type="text"
              className="w-full p-2 border border-gray-600 mb-2 rounded-xl "
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-600 mb-2 rounded-xl "
              placeholder="Enter Your Phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-600 mb-2 rounded-xl"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-600 mb-2 rounded-xl"
              placeholder="Enter Your Contry"
              value={contry}
              onChange={(e) => setcontry(e.target.value)}
            />
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="w-full p-2 border border-gray-600 mb-2 rounded-xl"
              value={barthday}
              onChange={(e)=>setbarthday(e.target.value)}
            />

            <select
              type="text"
              className="w-full p-2 border border-gray-600 mb-2 rounded-xl"
              id="gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <div className="flex items-center justify-center mt-1">
              <button
                className="py-2 px-4 bg-green-500 text-white rounded-xl hover:bg-green-800 translate-x-0 duration-300"
                type="submit"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </motion.ul>
    </div>
  );
};

export default ProfileModal;
