import React from 'react'

const UserLeft = ({user}) => {

    console.log(user)

  return (
    <div className=" bg-slate-100 shadow-2xl flex flex-col items-center justify-center gap-3 p-5">
            <img src={user.photoURL} alt="logo" className='w-20 h-20 rounded-full' />
            <h2>Name : {user.displayName}</h2>
            <h2>Email : {user.email}</h2>
            <h2>Phone : {user.phoneNumber}</h2>
    </div>
  )
}

export default UserLeft