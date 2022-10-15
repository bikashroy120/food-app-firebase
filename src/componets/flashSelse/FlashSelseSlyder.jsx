import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
// import { useDispatch } from 'react-redux';
// import { cartActions } from '../store/Cart/cart-slice';
import { useNavigate } from 'react-router-dom';
// import { FaShoppingBasket } from 'react-icons/fa';
import { Rating } from "@mui/material";
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

const FlashSelseSlyder = ({slyderItem}) => {
    // const disp = useDispatch()
    const navigiate = useNavigate();

    // const addToCart = (product) =>{

    //     disp(cartActions.addToCart({
    //         id:product.id,
    //         productname: product.title,
    //         feature_image: product.imageUrl,
    //         price:Number(product.price),
    //         qut:1,
    //     }));
    //   }

      const PageNatiom = (id)=>{
        navigiate(`/product/${id}`)
      }

    var settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: "100px",
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
          ,
          {
            breakpoint: 578,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          ,
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
    <Slider {...settings}>
      {slyderItem && slyderItem.map((product,index)=>{
        return(
          
          <div key={index} className="my-2">
            <div onClick={() => PageNatiom(product.id)}  className=" bg-white max-w-[235px] h-[320px] cart shadow hover:cursor-pointer hover:shadow-md"> 
                <div className="w-full h-[180px] overflow-hidden flex items-center justify-center">
                  <img src={product.imageUrl}alt="" className="w-[150px] h-[150px] object-contain cartImg" />
                </div>
                <div className="px-5">
                <h4 className=" font-[500] mb-3">{product.title} M10 TWS Ear 9D Stereo.....</h4>
                <h3>Price: <span className=" text-red-400">৳{product.price}</span></h3>
                <Rating name="read-only" value={4} readOnly />
                {/* <div className="flex items-center justify-between">
                  <h5>{product.calories} Calories</h5>
                  <button
                  className=" bg-orange-500 p-1 rounded-md text-white"
                  onClick={() => addToCart(product)}
                 >
                  add to card
                 </button>
                </div> */}
                </div>
            </div>
          </div>

        )
      })}
    </Slider>
  </div>
  )
}

export default FlashSelseSlyder