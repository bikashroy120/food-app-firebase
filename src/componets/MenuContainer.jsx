import React, { useState } from 'react'
import {MdFastfood} from 'react-icons/md'
import { motion } from "framer-motion";
import {category} from './Data'
import OurITeam from './OurITeam';

const MenuContainer = ({foodItems}) => {

const [FilterCat, setFilterCat] = useState("rice")


const filterData = foodItems && foodItems.filter((item)=>item.catagory===FilterCat)

console.log(filterData)


  return (
    <div>
         <div className='flex items-start justify-start flex-col'>
              <h3 className=' text-[2.5rem] text-gray-700 font-normal'>Our Hot Dishes</h3>
              <span className=' bg-red-600 w-40 h-1 rounded-2xl'></span>
            </div>

            <div className='flex items-center justify-center gap-4 my-10'>
                {category && category.map((item,index)=>{
                  return(
                    <motion.div whileTap={{scale: 0.9 }} key={index} className={`${FilterCat === item.urlPrameName ? "bg-red-600" :"bg-white"} group w-20 h-24 flex items-center justify-center flex-col  shadow-2xl cursor-pointer rounded-2xl hover:bg-red-600`} onClick={()=>setFilterCat(item.urlPrameName)}>
                        <div className={`${FilterCat === item.urlPrameName ? "bg-white" : "bg-red-600"} w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-white`}>
                            <MdFastfood className={`${FilterCat === item.urlPrameName ?"text-gray-600":"text-white "} text-md group-hover:text-gray-600`}/>
                        </div>
                        <p className={`${FilterCat === item.urlPrameName ? "text-white":" text-gray-600"} text-[10px] pt-2 group-hover:text-white`}>{item.name}</p>
                    </motion.div>
                  )
                })}
            </div>

            <div>
            <OurITeam fleg={false} item={filterData} />
            </div>

    </div>
  )
}

export default MenuContainer