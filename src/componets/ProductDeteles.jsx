import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebaseConfig";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/Cart/cart-slice";
import DitielsSlyder from "./DitielsSlyder";
import ContentLoader from "react-content-loader";

const ProductDeteles = () => {
  const [Data, setData] = useState();
  const [slyderItem, setslyderItem] = useState();
  const [cartitem, setcartitem] = useState(1);
  const disp = useDispatch();
  // const navigiate = useNavigate();
  const params = useParams();
  const [lodding, setlodding] = useState(false);

  useEffect(() => {
    setlodding(true);
    const getQuery = async () => {
      const items = await getDocs(
        query(
          collection(firestore, "foodItem"),
          where("id", "==", params.productid)
        )
      );
      setData(
        items.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      setlodding(false);
    };
    getQuery();
  }, [params]);

  useEffect(() => {
    const getQuery = async () => {
      const items = await getDocs(
        query(
          collection(firestore, "foodItem"),
          where("catagory", "==", Data && Data[0]?.catagory)
        )
      );
      setslyderItem(
        items.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    };
    getQuery();
  }, [Data]);

  const increment = () => {
    setcartitem(cartitem + 1);
  };

  const decrement = () => {
    if (cartitem === 1) {
      setcartitem(1);
    } else {
      setcartitem(cartitem - 1);
    }
  };

  const addToCart = (product) => {
    disp(
      cartActions.addToCart({
        id: Data && Data[0]?.id,
        productname: Data && Data[0]?.title,
        feature_image: Data && Data[0]?.imageUrl,
        price: Number(Data[0]?.price),
        qut: cartitem,
      })
    );
  };


  return (
    <div className="main mt-7">
      {lodding ? (
        <div className="flex items-start justify-start w-[900px] mx-auto">
          <ContentLoader
            speed={1}
            backgroundColor={"#333"}
            foregroundColor={"#999"}
            viewBox="0 0 380 250"
          >
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="320" height="170" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            backgroundColor={"#333"}
            foregroundColor={"#999"}
            viewBox="0 0 380 250"
          >
            {/* Only SVG shapes */}
            <rect x="105" y={1 * 20 + 20} rx="5" ry="5" width="250" height="12" />
            <rect x="105" y={2 * 20 + 20} rx="5" ry="5" width="250" height="12" />
            <rect x="105" y={3 * 20 + 20} rx="5" ry="5" width="250" height="12" />
            <rect x="105" y={4 * 20 + 20} rx="5" ry="5" width="250" height="12" />
            <rect x="105" y={5 * 20 + 20} rx="5" ry="5" width="250" height="12" />
            <rect x="105" y={6 * 20 + 20} rx="5" ry="5" width="250" height="12" />
            <rect x="105" y={7 * 20 + 20} rx="5" ry="5" width="250" height="12" />
          </ContentLoader>
        </div>
      ) : (
        <div className="flex items-start justify-between gap-8 flex-wrap">
          <div className=" flex-1 flex items-end md:justify-end justify-center">
            <div className="w-[300px] md:w-[450px] sm:w-[350px] bg-red-500 h-[450px] rounded-md">
              <img
                src={Data && Data[0]?.imageUrl}
                alt=""
                className=" object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 flex items-start justify-start md:justify-center">
            <div className="w-[300px] sm:w-[400px] md:min-w-[550px]">
              <h2 className=" font-medium text-[25px]">
                {Data && Data[0]?.title}
              </h2>
              <p className=" font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                quos voluptatem, ullam quia cum nostrum eius ipsa autem
                necessitatibus fuga sapiente beatae dolore laudantium amet rem
                eum nam corporis maxime dolores dicta hic architecto vero? Porro
                dolorum fuga rem repellat ut tempore, dolore numquam nostrum
                vitae. Itaque, dolores! Laboriosam, repudiandae?
              </p>
              <h3 className="text-[20px] font-normal mt-5">
                Price :{" "}
                <span className=" text-red-500">
                  $ {Data && Data[0]?.price}
                </span>
              </h3>
              <h3 className="text-[20px] font-normal mt-2">
                Catagory : {Data && Data[0]?.catagory}
              </h3>
              <h3 className="text-[20px] font-normal mt-2">
                Calories :{" "}
                <span className=" text-red-500">
                  {Data && Data[0]?.calories}
                </span>
              </h3>
              <div className="flex items-center justify-between w-[120px] h-10 overflow-hidden  border border-red-400 rounded-xl mt-5">
                <button
                  className="text-[25px] p-2 hover:bg-red-400 hover:text-white duration-300 transition-all"
                  onClick={decrement}
                >
                  <HiMinusSm />
                </button>
                <h2 className="border  border-l-red-400  border-r-red-400 w-[50px] h-full flex items-center justify-center">
                  {cartitem}
                </h2>
                <button
                  className="text-[25px] p-2 hover:bg-red-400 hover:text-white duration-300 transition-all"
                  onClick={increment}
                >
                  <HiPlusSm />
                </button>
              </div>

              <div className="mt-5">
                <button
                  onClick={addToCart}
                  className="py-3 text-[20px] rounded-2xl hover:bg-red-700 duration-300 transition-all px-10  bg-red-500 text-white"
                >
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className=" mt-[100px]">
        <DitielsSlyder slyderItem={slyderItem} />
      </div>
    </div>
  );
};

export default ProductDeteles;
