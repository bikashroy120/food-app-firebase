import React, { useEffect } from 'react'
import {IoIosRemove,IoMdAdd} from 'react-icons/io'
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import {cartActions} from '../store/Cart/cart-slice'

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const decrementItemQty = () =>{
        dispatch(cartActions.decrementQty(item.item));
        dispatch(cartActions.getTotals())
      }
    //   const onRemoveCart = () => {
    //     dispatch(cartActions.removefCart(item.item));
    //     dispatch(cartActions.getTotals())
    //   }
    
      useEffect(() => {
        dispatch(cartActions.getTotals())
      }, [dispatch])

      const incrementItemQty = () =>{
        dispatch(cartActions.addToCart({
            id:item.item,
            productname: item.productname,
            feature_image: item.feature_image,
            price:Number(item.amount_item)
        }));
        dispatch(cartActions.getTotals())
    }
  

  return (
    <div className='bg-[#2E3032] flex items-center justify-between p-2 mb-2'>
    <div className='flex items-start justify-start gap-1'>
        <img src={item.feature_image} className=' w-16 h-16' alt="" />
        <div>
            <h4 className=' text-white'>{item.productname}</h4>
            <h3 className=' text-red-600 mt-1'>$ <span className=' text-white'>{item.amount_item}</span></h3>
        </div>
    </div>

    <div className='flex items-center justify-center'>
        <motion.button whileTap={{scale: 0.6}}className=' text-white text-[25px] p-1' onClick={decrementItemQty}><IoIosRemove/></motion.button>
        <span className=' text-white'>{item.quantity}</span>
        <motion.button whileTap={{scale: 0.6}} className=' text-white text-[25px] p-1' onClick={incrementItemQty}><IoMdAdd/></motion.button>
    </div>
</div>
  )
}

export default CartItem