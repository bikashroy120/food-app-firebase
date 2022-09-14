import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../firebaseConfig";


const Addmin = () => {
  // const Items = useSelector((state) => state.order.Items);
  const [Data, setData] = useState();
  const [toDay,settoday] = useState();
  const navigiate = useNavigate();
  const AddItem = () => {
    navigiate("/addmin/creact");
  };

  const Orderlist = () => {
    navigiate("/addmin/orderlist");
  };





  

  useEffect(() => {
    const getQuery = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setDate(today.getDay()+10));
      const items = await getDocs(
        query(
          collection(firestore, "orderItem"),
          where("timeState", "<=", today),
          where("timeState", ">", lastMonth)
        )
      );
      setData(items.docs.map((doc) => doc.data()));
    };
    getQuery();
  }, []);


  useEffect(() => {
    const ttt = Data && Data.reduce((total,value)=>{
           return total.total + value.total
    })
    settoday(ttt)
  }, [Data])

  const RoDaySeles = () => {
    navigiate("/addmin/todayorderlist");
  };

  return (
    <div className="w-full h-[85vh]">
      <div className="flex items-center justify-between">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={AddItem}
          className="w-[400px] h-[250px] bg-blue-500 rounded-xl flex items-center justify-center flex-col cursor-pointer"
        >
          <h2 className="text-[25px]">Add Item</h2>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={Orderlist}
          className="w-[400px] h-[250px] bg-blue-500 rounded-xl flex items-center justify-center flex-col cursor-pointer"
        >
          <h2 className="text-[25px]">Order List</h2>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={RoDaySeles}
          className="w-[400px] h-[250px] bg-blue-500 rounded-xl flex items-center justify-center flex-col cursor-pointer"
        >
          <h2 className="text-[25px]">To Day Seles</h2>
          <h2>Seles Item : {Data && Data.length}</h2>
          <h2>Total Seles : {toDay}</h2>
        </motion.button>
      </div>
    </div>
  );
};

export default Addmin;
