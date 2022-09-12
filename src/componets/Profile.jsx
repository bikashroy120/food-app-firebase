import React, { useState } from 'react'
import { useStateValue } from '../contex/stateProvider';
import UserLeft from './UserLeft'
import UserRight from './UserRight'

const Profile = () => {
    const [{user,orderItems},] = useStateValue();
  return (
    <div className='flex items-start justify-start h-[85vh] gap-4'>
        <div className='flex-1 md:w-[30%]'>
            <UserLeft user={user} />
        </div>
        <div className='flex-3 items-start md:w-[70%] h-[100%] bg-slate-100 shadow-2xl p-5'>
            <UserRight user={user} orderItems={orderItems}/>
        </div>
    </div>
  )
}

export default Profile