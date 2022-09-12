import React from 'react'
import img from './img/com.png'
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
    const navigiate = useNavigate();
    const Shoping = ()=>{
        navigiate('/')
    }
  return (
    <div className='w-full'>
        <div className="flex items-center justify-center flex-col h-[85vh]">
            <h2 className='text-[30px] mb-4'>Your order has been received.</h2>
            <img src={img} alt="" className='w-36 h-36' />
            <h5 className='my-2'>Thanks you for your purchase !</h5>
            <p className='my-2'>
            You will receive an order confirmation email with details of your
            orders
            </p>
            <div className="">
                <button onClick={Shoping} className=' bg-orange-500 py-2 px-10 text-white mt-4 rounded-md'>continue shopping</button>
            </div>
        </div>
    </div>
  )
}

export default OrderPage