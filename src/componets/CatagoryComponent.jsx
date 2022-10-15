import React from 'react'
import {category} from './Data'
import {MdFastfood} from 'react-icons/md'
// import { motion } from "framer-motion";

const CatagoryComponent = () => {
    console.log(category)
  return (
    <div className='mt-7'>
        <h3 className=' text-[1.5rem] text-gray-700 font-normal'>Categories</h3>
        <div className='flex items-center justify-between flex-wrap gap-2 mt-2'>
            {category.map((item,index)=>{
               return(
                <div key={index} className=" bg-orange-400 shadow-md w-[160px] h-[150px] rounded-lg cursor-pointer flex items-center justify-center flex-col">
                    <MdFastfood className='text-[26px] mb-1'/>
                    <h2>{item.name}</h2>
                </div>
               )
            })}
        </div>
    </div>
  )
}

export default CatagoryComponent