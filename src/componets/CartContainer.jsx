import React from 'react'
import {TbArrowNarrowLeft} from "react-icons/tb"
import {IoIosRemoveCircleOutline} from 'react-icons/io'
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useStateValue } from '../contex/stateProvider';
import { actionType } from '../contex/reducer';

const CartContainer = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cart.itemList);
    const subtotal = useSelector((state)=>state.cart.subtotal);
    
    const [{cartShow },] = useStateValue();

    const setShowCarts = ()=>{
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: false,
          });
    }


  return (
    <div className='fixed top-0 right-0 w-full h-screen md:w-[375px] bg-white drop-shadow-md flex flex-col z-[1001]'>
        <div className='flex items-center justify-between px-5 pt-4 pb-4'>
            <motion.div whileTap={{scale: 0.6}} className=' cursor-pointer'>
                <TbArrowNarrowLeft className='text-[38px]' onClick={setShowCarts} />
            </motion.div>

            <div>
                <h3>Cart</h3>
            </div>

            <div>
                <motion.button whileTap={{scale: 0.9}} className='text-[15px] flex items-center border border-gray-400 py-1 bg-slate-100 rounded-xl gap-1 px-3'>Clear <IoIosRemoveCircleOutline /></motion.button>
            </div>
        </div>

        <div className='w-full h-full bg-[#282A2C] rounded-t-[2rem]'>
            <div className='h-[60vh] pt-7 px-5'>
                {cartItems && cartItems.map((item,index)=>{
                    return(
                        <CartItem item={item} key={index}/>    
                    )
                })}
            </div>

            <div className='w-full h-full bg-[#333537] rounded-t-[2rem] pt-7 px-5'>
                <div>
                    <div className='flex items-center justify-between text-gray-400 font-normal mb-4'>
                        <h4>Sub Total</h4>
                        <h4>$ {subtotal}</h4>
                    </div>
                    <div className='flex items-center justify-between text-gray-400 font-normal mb-2'>
                        <h4>Delivery</h4>
                        <h4>$ 3</h4>
                    </div>
                </div>

                <div className='my-7 border border-gray-600'></div>

                <div>
                    <div className='flex items-center justify-between text-gray-400 font-normal mb-2'>
                        <h3>Total</h3>
                        <h3>$ {subtotal ? subtotal+3 : 0}</h3>
                    </div>
                    <div className='flex items-center justify-center'>
                        <motion.button whileTap={{scale: 0.9}} className='py-2 px-10 bg-orange-500 text-white rounded-2xl hover:drop-shadow-2xl'>Check Out</motion.button>
                    </div>
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default CartContainer