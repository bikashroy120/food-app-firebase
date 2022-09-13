import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Addmin = () => {

    const navigiate = useNavigate();
    const AddItem = ()=>{
        navigiate('/addmin/creact')
    }

    const Orderlist = ()=>{
        navigiate("/addmin/orderlist")
    }

    const RoDaySeles = ()=>{

    }

  return (
    <div className='w-full h-[85vh]'>
        <div className='flex items-center justify-between'> 
            <motion.button whileTap={{scale: 0.9 }} onClick={AddItem} className='w-[400px] h-[250px] bg-blue-500 rounded-xl flex items-center justify-center flex-col cursor-pointer'>
                <h2 className='text-[25px]'>Add Item</h2>
            </motion.button>
            <motion.button whileTap={{scale: 0.9 }} onClick={Orderlist} className='w-[400px] h-[250px] bg-blue-500 rounded-xl flex items-center justify-center flex-col cursor-pointer'>
                 <h2 className='text-[25px]'>Order List</h2>
            </motion.button>
            <motion.button whileTap={{scale: 0.9 }} onCkick={RoDaySeles} className='w-[400px] h-[250px] bg-blue-500 rounded-xl flex items-center justify-center flex-col cursor-pointer'>
                 <h2 className='text-[25px]'>To Day Seles</h2>
            </motion.button>
        </div>
    </div>
  )
}

export default Addmin