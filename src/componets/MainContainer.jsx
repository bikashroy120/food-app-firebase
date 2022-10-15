import React, { useEffect, useState } from 'react'
import HeroContainer from './HeroContainer'
import { motion } from "framer-motion";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
import { useStateValue } from '../contex/stateProvider';
import OurITeam from './OurITeam';
import MenuContainer from './MenuContainer';
import CatagoryComponent from './CatagoryComponent';
import DitielsSlyder from './DitielsSlyder';
import FlashSelse from './flashSelse/FlashSelse';



const MainContainer = () => {
    const [state, setstate] = useState(0)
    const [{ foodItems},] = useStateValue();

  const filterItem = foodItems && foodItems.filter((item)=> item.catagory==='icecreams')
  console.log(foodItems)
    useEffect(()=>{

    },[setstate])
  return (
    <div className='w-full h-auto container'> 
        <HeroContainer />
        <FlashSelse slyderItem={filterItem}/>
        <CatagoryComponent />

        <section className='w-full pt-10'>
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

        <section className='w-full mt-10'>
            <MenuContainer foodItems={foodItems}/>
            <div className='w-full flex items-center justify-center mt-5'>
                <button className=' bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded-md'>See More</button>
            </div>
        </section>

    </div>
  )
}

export default MainContainer