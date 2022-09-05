import React,{useState} from 'react'
import {MdFastfood,MdCloudUpload,MdFoodBank,MdAttachMoney} from "react-icons/md"
import {category} from './Data' 
import Loder from './Loder';
import { deleteObject , ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseConfig';

const CreactContainer = () => {

  const [title,setTitle]= useState("");
  const [calories,setcalories]= useState("");
  const [price,setprice]=useState('');
  const [catagory,setcatagory]=useState('');
  const [imageAsset,setimageAsset]=useState(null);
  const [fields,setfields]= useState(false);
  const [alertAtatus,setalertAtatus]=useState("danger")
  const [msg,setmsg]=useState(null);
  const [isLodding,setisLodding]=useState(false)

  const UplodeImg=(e)=>{
    setisLodding(true)
    const upImg = e.target.files[0];
    const storageRef = ref(storage, `image/${Date.now()}-${upImg.name}`);
    const uploadTask = uploadBytesResumable(storageRef, upImg);
    uploadTask.on('state_changed', 
    (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
 
    }, 
      (error) => {
          console.log(error)
          setfields(true)
          setmsg("error while uploadding : Try AGain")
          setalertAtatus("danger")
          setTimeout(() => {
            setfields(false)
            setisLodding(false)
          }, 4000);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimageAsset(downloadURL)
          setfields(true)
          setisLodding(false)
          setmsg("Image uploaded successfully")
          setTimeout(() => {
            setfields(false)
          }, 4000);
        });
      }
    );

  }

  const DelectImg=()=>{
    const desertRef = ref(storage, imageAsset);
    deleteObject(desertRef).then(() => {
          setfields(true)
          setisLodding(false)
          setmsg("Image Delect successfully")
          setTimeout(() => {
            setfields(false)
          }, 4000);
    }).catch((error) => {
      console.log(error)
      setfields(true)
      setmsg("error while Delecting: Try AGain")
      setalertAtatus("danger")
      setTimeout(() => {
        setfields(false)
        setisLodding(false)
      }, 4000);
    });
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
        <div className='w-[90%] md:w-[75%] border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2'>
            {fields && (
              <p className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertAtatus==="danger" ? 'bg-red-400 text-red-800' : ' bg-emerald-400 text-emerald-800'}`}>{msg}</p>
            )}

            <div className='w-full py-2 border-b border-gray-300 flex items-center justify-center gap-2'>
                <MdFastfood className='text-lg text-gray-700'/>
                <input type="text"
                  placeholder='Give Me A title..'
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  className="w-full h-full bg-transparent text-lg font-semibold outline-none border-none text-gray-500"
                />
            </div>

            <div className='w-full'>
                <select className='w-full outline-none border-none border-b-2 border-gray-600 py-2 bg-white text-gray-400'>
                  <option className=' text-gray-500 p-2' value="order">Secelect Categoey</option>
                  {category && category.map((item)=>{
                    return(
                      <option className=' text-gray-500 p2' key={item.id} value={item.urlPrameName}>{item.name}</option>
                    )
                  })}
                </select>
            </div>

            <div className=' group flex flex-col items-center justify-center border-2 border-dotted border-gray-400 cursor-pointer w-full h-225 md:h-[420px]'>
                  {isLodding ? <Loder /> : <>
                    {!imageAsset?(
                      <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                          <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                              <MdCloudUpload className='text-gray-500 text-3xl'/>
                              <p className='text-gray-500 text-3xl'>Click here to uploade</p>
                          </div>
                          <input type="file" accept='image/*' name='uploadImg' onChange={UplodeImg} className="w-0 h-0"/>
                      </label>
                    ):(<div className='h-full relative'>
                        <img src={imageAsset} alt="" className='w-full h-full object-contain'/>
                        <button className='absolute bottom-3 right-3 cursor-pointer outline-none p-3 bg-red-400 rounded-md hover:shadow-sm duration-500 ease-in-out' onClick={DelectImg}>Delect Image</button>
                    </div>)}

                  </>}
            </div>

            <div className='w-full py-2 border-b border-gray-300 flex items-center justify-center gap-2'>
                <MdFoodBank className='text-lg text-gray-700'/>
                <input type="text"
                  placeholder='calories..'
                  value={calories}
                  onChange={(e)=>setcalories(e.target.value)}
                  className="w-full h-full bg-transparent text-lg font-semibold outline-none border-none text-gray-500"
                />
            </div>

            <div className='w-full py-2 border-b border-gray-300 flex items-center justify-center gap-2'>
                <MdAttachMoney className='text-lg text-gray-700'/>
                <input type="text"
                  placeholder='Price..'
                  value={price}
                  onChange={(e)=>setprice(e.target.value)}
                  className="w-full h-full bg-transparent text-lg font-semibold outline-none border-none text-gray-500"
                />
            </div>

        </div>
    </div>
  )
}

export default CreactContainer