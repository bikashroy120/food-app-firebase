import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/Cart/cart-slice';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'



function SampleNextArrow(props) {
    const { onClick} = props;
    return (
      <div onClick={onClick} className={` text-[30px] text-red-500 bg-white absolute top-[50%] translate-y-[-50%] right-[-30px] w-8 flex items-center justify-center cursor-pointer rounded-lg shadow-lg `}>
        <MdKeyboardArrowRight />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className={` text-[30px] text-red-500 bg-white absolute top-[50%] translate-y-[-50%] z-10 left-[-30px] w-8 flex items-center justify-center cursor-pointer rounded-lg shadow-lg `}>
        <MdKeyboardArrowLeft />
        </div>
    );
  }

const DitielsSlyder = ({slyderItem}) => {
    const disp = useDispatch()
    const navigiate = useNavigate();

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
        navigiate(`/product/${id}`)
      }

    var settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
    <Slider {...settings}>
      {slyderItem && slyderItem.map((item,index)=>{
        return(
            <div key={index}>
                <div  className=' bg-slate-200 min-w-[300px] mx-2 my-12 backdrop-blur-lg cursor-pointer rounded-2xl hover:drop-shadow-lg md:min-w-[315px]  z-20  p-3 '>
                    <div className='flex items-center justify-between -pt-20'>
                        <motion.img whileHover={{scale: 1.2}} src={item.imageUrl} onClick={()=>PageNatiom(item.id)} alt="" className='w-40 h-40 -mt-10 drop-shadow-2xl'/>
                        <motion.button whileTap={{scale: 0.6 }} className=' bg-orange-500 p-3 rounded-full' onClick={()=>addToCart(item)} ><FaShoppingBasket /></motion.button>
                    </div>
                    <div className=' text-left pl-auto flex flex-col items-end justify-end'>
                        <h4>{item.title}</h4>
                        <h5>{item.calories} Calories</h5>
                        <h3>{item.price}</h3>
                    </div>
                </div>
            </div>
        )
      })}
    </Slider>
  </div>
  )
}

export default DitielsSlyder