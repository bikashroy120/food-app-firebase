import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../firebaseConfig";
import {HiPlusSm,HiMinusSm} from 'react-icons/hi'

const ProductDeteles = () => {
  const [Data, setData] = useState();
  // const navigiate = useNavigate();
  const params = useParams();

  useEffect(() => {
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
    };
    getQuery();
  }, []);

  console.log(Data);

  return (
    <div className="main mt-7">
      <div className="flex items-start justify-between gap-8 flex-wrap">
        <div className=" flex-1 flex items-end md:justify-end justify-center">
          <div className="w-[300px] md:w-[450px] sm:w-[350px] bg-red-500 h-[450px] rounded-md">
          <img src={Data && Data[0]?.imageUrl} alt="" className=" object-contain w-full h-full" />
          </div>
        </div>
        <div className="flex-1 flex items-start justify-start md:justify-center">
            <div className="w-[300px] sm:w-[400px] md:min-w-[550px]">
            <h2 className=" font-medium text-[25px]">{Data && Data[0]?.title}</h2>
            <p className=" font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
                voluptatem, ullam quia cum nostrum eius ipsa autem necessitatibus
                fuga sapiente beatae dolore laudantium amet rem eum nam corporis
                maxime dolores dicta hic architecto vero? Porro dolorum fuga rem
                repellat ut tempore, dolore numquam nostrum vitae. Itaque, dolores!
                Laboriosam, repudiandae?
            </p>
            <h3 className="text-[20px] font-normal mt-5">Catagory : {Data && Data[0]?.catagory}</h3>
            <div className="flex items-center justify-center w-[150px] h-10  border border-red-400 rounded-xl">
                <button>< HiPlusSm /></button>
                <h2>2</h2>
                <button><HiMinusSm/></button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeteles;
