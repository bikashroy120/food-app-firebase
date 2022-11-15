import React, { useEffect, useRef } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";
import ppp from "./img/NotFound.svg";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/Cart/cart-slice";
import { useNavigate } from "react-router-dom";
import ContentLoader, { Facebook } from "react-content-loader";
import { Rating } from "@mui/material";
import './componentstyle.css'

const OurITeam = ({ item, state }) => {
  const refContaier = useRef();
  const navigiate = useNavigate();
  useEffect(() => {
    refContaier.current += state;
  }, [state]);

  const disp = useDispatch();

  const addToCart = (product) => {
    disp(
      cartActions.addToCart({
        id: product.id,
        productname: product.title,
        feature_image: product.imageUrl,
        price: Number(product.price),
        qut: 1,
      })
    );
  };

  const PageNatiom = (id) => {
    navigiate(`product/${id}`);
  };

  return (
    <div
      className={`grid items-center grid-cols-2 md:grid-cols-3 sm:gap-5 lg:flex justify-center z-20 gap-1 py-2 flex-wrap`}
    >
      {item && item.length !== 0 ? (
        item.slice(0,15).map((product) => {
          return (
            // <div
            //   ref={refContaier}
            //   className=" bg-slate-200 min-w-[300px] my-12 backdrop-blur-lg cursor-pointer rounded-2xl hover:drop-shadow-lg md:min-w-[315px]  z-20  p-3 "
            //   key={product.id}
            // >
            //   <div className="flex items-center justify-between -pt-20">
            //     <motion.img
            //       whileHover={{ scale: 1.2 }}
            //       src={product.imageUrl}
            //       onClick={() => PageNatiom(product.id)}
            //       alt=""
            //       className="w-40 h-40 -mt-10 drop-shadow-2xl"
            //     />
            //     <motion.button
            //       whileTap={{ scale: 0.6 }}
            //       className=" bg-orange-500 p-3 rounded-full"
            //       onClick={() => addToCart(product)}
            //     >
            //       <FaShoppingBasket />
            //     </motion.button>
            //   </div>
            //   <div className=" text-left pl-auto flex flex-col items-end justify-end">
            //     <h4>{product.title}</h4>
            //     <h5>{product.calories} Calories</h5>
            //     <h3>{product.price}</h3>
            //   </div>
            // </div>

            <div className=" bg-white h-auto md:w-[250px] w-auto xl:w-[220px] xl:h-[350px] cart shadow  hover:shadow-md"> 
                <div onClick={() => PageNatiom(product.id)} className="w-full cursor-pointer h-[180px] overflow-hidden flex items-center justify-center">
                  <img src={product.imageUrl}alt=""  className="w-[150px] h-[150px] object-contain cartImg" />
                </div>
                <div className="px-3">
                <h4 className=" font-[500] mb-3">{product.title} M105 TWS Earph 9D Stereo.....</h4>
                <h3>Price: <span className=" text-red-400">৳{product.price}</span></h3>
                <Rating name="read-only" value={4} readOnly />
                <div className=" items-center justify-between flex-col sm:flex-row hidden sm:flex">
                  <h5>{product.calories} Calories</h5>
                  <button
                  className=" bg-orange-500 p-1 rounded-md text-white"
                  onClick={() => addToCart(product)}
                 >
                  add to card
                 </button>
                </div>
                </div>
            </div>

          );
        })
      ) : (
        <div className="w-[400px] h-[400px] flex items-center justify-center flex-col">
          {/* <img src={ppp} alt=""  className=''/>
            <p className='mt-3'>Product Not Avaleabale</p> */}
          <ContentLoader
            height={140}
            speed={1}
            backgroundColor={"#333"}
            foregroundColor={"#999"}
            viewBox="0 0 380 70"
          >
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          </ContentLoader>
        </div>
      )}
    </div>
  );
};

export default OurITeam;
