import React, { useEffect, useRef } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";
import ppp from "./img/NotFound.svg"
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/Cart/cart-slice';
import { useNavigate } from 'react-router-dom';

const OurITeam = ({item,fleg,state}) => {
    const refContaier = useRef()
    const navigiate = useNavigate();
    useEffect(()=>{
        refContaier.current+= state;
    },[state])

    const disp = useDispatch()


    const addToCart = (product) =>{

        disp(cartActions.addToCart({
            id:product.id,
            productname: product.title,
            feature_image: product.imageUrl,
            price:Number(product.price),
            qut:1,
        }));
      }

      const PageNatiom = (id)=>{
        navigiate(`product/${id}`)
      }


  return (
    <div className={`flex items-center justify-center z-20 gap-3 ${fleg ? "overflow-x-scroll" : "overflow-x-hidden flex-wrap"}`}>
        {item && item.length !== 0 ?  item.map((product)=>{
            return(
                <div ref={refContaier} className=' bg-slate-200 min-w-[300px] my-12 backdrop-blur-lg cursor-pointer rounded-2xl hover:drop-shadow-lg md:min-w-[315px]  z-20  p-3 ' key={product.id}>
                    <div className='flex items-center justify-between -pt-20'>
                        <motion.img whileHover={{scale: 1.2}} src={product.imageUrl} onClick={()=>PageNatiom(product.id)} alt="" className='w-40 h-40 -mt-10 drop-shadow-2xl'/>
                        <motion.button whileTap={{scale: 0.6 }} className=' bg-orange-500 p-3 rounded-full' onClick={()=>addToCart(product)} ><FaShoppingBasket /></motion.button>
                    </div>
                    <div className=' text-left pl-auto flex flex-col items-end justify-end'>
                        <h4>{product.title}</h4>
                        <h5>{product.calories} Calories</h5>
                        <h3>{product.price}</h3>
                    </div>
                </div>
            )
        }):(<div className='w-[400px] h-[400px] flex items-center justify-center flex-col'>
            <img src={ppp} alt=""  className=''/>
            <p className='mt-3'>Product Not Avaleabale</p>
        </div>)
        }
    </div>
  )
}

export default OurITeam