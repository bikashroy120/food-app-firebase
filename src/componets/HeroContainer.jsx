import React from 'react'
import delevary from "./img/delivery.png"
import HeroBg from './img/hero.png'



const HeroContainer = () => {

    // const Data=[
    //     {id:1,name:"Icecream",decp: 'Chocolate & vanilla',price:'5.25',img:I1 },
    //     {id:2,name:"Strawverrice",decp: 'Fersh Strawberries',price:'10.25',img:f1},
    //     {id:3,name:"Chicken Kebab",decp: 'Mixed kebab plate',price:'8.25',img:c3 },
    //     {id:4,name:"Fish Kebab",decp: 'Mixed Fish kebab',price:'5.25',img:fi1 },
    // ]

  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-2'> 
    <div className='py-2 flex flex-1 flex-col items-start justify-center gap-2'>
       <div className='bg-orange-100 px-4 py-2 flex items-center gap-2 rounded-md'>
       <p className=' text-orange-500'>Bike delivery</p>
        <div className='w-8 h-8 rounded-full bg-white'>
            <img src={delevary} alt="" className=' object-contain w-full h-full' />
        </div>
       </div>

       <p className='text-[2.5rem] lg:text-[4rem] font-[700]'>The Fastest Delevary In<span className=' text-orange-600'>Your City</span></p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione qui atque magnam eum dolore, praesentium eaque tenetur. Culpa architecto quae libero at ipsum doloremque dolorum nostrum totam rerum eaque!</p>

        <button className=' bg-gradient-to-br from-orange-400 to-orange-500 px-5 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out  duration-100'>Order Now</button>
    </div>

    <div className='py-2 flex-1 flex items-center relative'>
        
        <img src={HeroBg} alt="" />
    </div>
</div>
  )
}

export default HeroContainer