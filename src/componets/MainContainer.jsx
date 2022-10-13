import React, { useEffect, useState } from 'react'
import HeroContainer from './HeroContainer'
import { motion } from "framer-motion";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
import { useStateValue } from '../contex/stateProvider';
import OurITeam from './OurITeam';
import MenuContainer from './MenuContainer';
import CatagoryComponent from './CatagoryComponent';
import DitielsSlyder from './DitielsSlyder';



const MainContainer = () => {
    const [state, setstate] = useState(0)
    const [{ foodItems},] = useStateValue();

  const filterItem = foodItems && foodItems.filter((item)=> item.catagory==='icecreams')
    useEffect(()=>{

    },[setstate])
  return (
    <div className='w-full h-auto'> 
        <HeroContainer />
        <CatagoryComponent />

        <section className='w-full pt-14'>
            <div className='flex items-center justify-between'>
                <div className='flex-1 flex items-start justify-start flex-col'>
                <h3 className=' text-[1.5rem] text-gray-700 font-normal'>Our Fresh & Healthy Foods</h3>
                </div>
                <div className='flex-1 flex gap-2 justify-end ml-auto'>
                    <motion.button whileTap={{scale: 0.6 }} onClick={()=>setstate(-200)} className=' bg-orange-400 rounded-md p-2 text-white'> <IoIosArrowBack /> </motion.button>
                    <motion.button whileTap={{scale: 0.6 }} onClick={()=>setstate(200)} className=' bg-orange-400 rounded-md p-2 text-white'><IoIosArrowForward /></motion.button>
                </div>
            </div>

            <div>
                <DitielsSlyder slyderItem={filterItem}/>
            </div>

            {/* <div className='py-12'>
                <OurITeam fleg={true} item={filterItem} state ={state}/>
            </div> */}
        </section>

        <section className='w-full'>
            <MenuContainer foodItems={foodItems}/>
        </section>

    </div>
  )
}

export default MainContainer