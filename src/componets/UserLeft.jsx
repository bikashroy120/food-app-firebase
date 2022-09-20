import React, { useState } from 'react'
import {MdModeEditOutline} from 'react-icons/md'
import avater from "../componets/img/avatar.png";
import ProfileModal from './ProfileModal';

const UserLeft = ({user}) => {
  const [show, setShow] = useState(false)
  const Clicket = ()=>{
    setShow(true)
  }

  return (
    <div className="p-5 border border-black rounded-lg">
        <div className='flex items-center justify-start gap-3 rounded-full'> 
            <img src={user[0]?.photoURL? user[0]?.photoURL : avater} alt=""  className='w-16 h-16' />
            <div>
              <h2>{user[0]?.displayName}</h2>
              <p onClick={Clicket} className='flex items-center justify-center cursor-pointer'><MdModeEditOutline />Edit Profile</p>
            </div>
        </div>
        <div className='w-full pt-[1px] bg-slate-400 mt-4 mb-5'></div>

        <div>
            <div className='flex items-center gap-1'>
              <h1 className='w-[75px]'>Address</h1>
              <h2>:</h2>
              <h2>{user[0]?.address}</h2>
            </div>
            <div className='flex items-center gap-1'>
              <h1 className='w-[75px]'>Country</h1>
              <h2>:</h2>
              <h2>{user[0]?.country}</h2>
            </div>
            <div className='flex items-center gap-1'>
              <h1 className='w-[75px]'>Phone</h1>
              <h2>:</h2>
              <h2>{user[0]?.phone}</h2>
            </div>
            <div className='flex items-center gap-1'>
              <h1 className='w-[75px]'>gender</h1>
              <h2>:</h2>
              <h2>{user[0]?.gender}</h2>
            </div>
        </div>

    {show && <ProfileModal setShow = {setShow} user = {user}/>}

    </div>
  )
}

export default UserLeft