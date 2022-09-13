import React,{useEffect,useState} from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { collection, doc, getDocs, query ,updateDoc,where } from "firebase/firestore"; 
import {firestore} from '../firebaseConfig'


const Addmin = () => {
    const Items = useSelector((state)=>state.order.Items);
    const [Data, setData] = useState()
    const navigiate = useNavigate();
    const AddItem = ()=>{
        navigiate('/addmin/creact')
    }

    const Orderlist = ()=>{
        navigiate("/addmin/orderlist")
    }

    console.log(new Date(Items[0]?.timeState.seconds * 1000))

    // const fireBaseTime = new Date(
    //     time.seconds * 1000 + time.nanoseconds / 1000000,
    //   );

    // useEffect(() => {
    //     const itemFilter = Items.filter((it)=>it.timeState === new Date())
    //     console.log(itemFilter)
    // }, [])

    useEffect(() => {
        const getQuery = async ()=>{
            const dat  = new Date()
          const items = await getDocs(
              query(collection(firestore,"orderItem"),where("timeState", "==", dat.getDate()))
          );
          setData(items.docs.map((doc)=> doc.data())) 
      }
      getQuery()
      }, [])

    const RoDaySeles = ()=>{
        const dat  = new Date()
        console.log(dat.getDate())
    }

  return (
    <div className='w-full h-[85vh]'>
        <div className='flex items-center justify-between'> 
            <motion.button whileTap={{scale: 0.9 }} onClick={AddItem} className='w-[400px] h-[250px] bg-blue-500 rounded-xl flex items-center justify-center flex-col cursor-pointer'>
                <h2 className='text-[25px]'>Add Item</h2>
            </motion.button>
            <motion.button whileTap={{scale: 0.9 }} onClick={Orderlist} className='w-[400px] h-[250px] bg-blue-500 rounded-xl flex items-center justify-center flex-col cursor-pointer'>
                 <h2 className='text-[25px]'>Order List</h2>
            </motion.button>
            <motion.button whileTap={{scale: 0.9 }} onClick={RoDaySeles} className='w-[400px] h-[250px] bg-blue-500 rounded-xl flex items-center justify-center flex-col cursor-pointer'>
                 <h2 className='text-[25px]'>To Day Seles</h2>
            </motion.button>
        </div>
    </div>
  )
}

export default Addmin