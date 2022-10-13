import React from 'react'
import {category} from './Data'
import {MdFastfood} from 'react-icons/md'
import { motion } from "framer-motion";

const CatagoryComponent = () => {
    console.log(category)
  return (
    <div className='mt-2'>
        <h3 className=' text-[1.5rem] text-gray-700 font-normal'>Our Fresh & Healthy Foods</h3>
        <div className='flex items-center justify-between gap-2'>
            {category.map((item,index)=>{
               return(
                <div key={index} className=" bg-orange-400 w-full h-[110px] rounded-lg cursor-pointer flex items-center justify-center flex-col">
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