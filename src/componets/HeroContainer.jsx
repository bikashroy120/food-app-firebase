import React from 'react'
import delevary from "./img/delivery.png"
import HeroBg from './img/heroBg.png'
import I1 from './img/i1.png'
import f1 from "./img/f1.png"
import c3 from './img/c3.png'
import fi1 from './img/fi1.png'


const HeroContainer = () => {

    const Data=[
        {id:1,name:"Icecream",decp: 'Chocolate & vanilla',price:'5.25',img:I1 },
        {id:2,name:"Strawverrice",decp: 'Fersh Strawberries',price:'10.25',img:f1},
        {id:3,name:"Chicken Kebab",decp: 'Mixed kebab plate',price:'8.25',img:c3 },
        {id:4,name:"Fish Kebab",decp: 'Mixed Fish kebab',price:'5.25',img:fi1 },
    ]

  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-2'> 
    <div className='py-2 flex flex-1 flex-col items-start justify-center gap-2'>
       <div className='bg-orange-100 px-4 py-2 flex items-center gap-2 rounded-md'>
       <p className=' text-orange-500'>Bike delivery</p>
        <div className='w-8 h-8 rounded-full bg-white'>
            <img src={delevary} alt="" className=' object-contain w-full h-full' />
        </div>
       </div>

       <p className='text-[2.5rem] lg:text-[4.5rem] font-light'>The Fastest Delevary In<span className=' text-orange-600'>Your City</span></p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione qui atque magnam eum dolore, praesentium eaque tenetur. Culpa architecto quae libero at ipsum doloremque dolorum nostrum totam rerum eaque!</p>

        <button className=' bg-gradient-to-br from-orange-400 to-orange-500 px-5 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out  duration-100'>Order Now</button>
    </div>

    <div className='py-2 flex-1 flex items-center relative'>
        
        <div className='exter_img'>
            <img src={HeroBg} alt="" className='ml-auto w-full  md:h-300 object-contain' />
        </div>

        <div className=' absolute w-full h-auto top-1 -left-10 flex flex-wrap gap-2 items-start justify-start px-32 py-4'>
            {Data.map((item)=>{
                return(
                    <div key={item.id} className="bg-gray-50 mt-20 backdrop-blur-md w-190 shadow-lg min-w-[190px] p-4 rounded-3xl flex flex-col items-center justify-center">
                        <img src={item.img} alt="" className='w-40 -mt-20 mb-3' />
                        <h3 className='text-[15px] mb-2'>{item.name}</h3>
                        <h4 className=' text-orange-500 mb-2'>{item.price}</h4>
                        <p className='text-[14px]'>{item.decp}</p>
                    </div>
                )
            })}
        </div>
        
    </div>
</div>
  )
}

export default HeroContainer