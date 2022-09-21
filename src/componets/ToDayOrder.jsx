import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { deleteDoc } from 'firebase/firestore';
import { doc } from "firebase/firestore"; 
import {firestore} from '../firebaseConfig'
import {useDispatch} from 'react-redux'
import { factOrder } from '../store/Order/order-actions';
import toast from 'react-hot-toast';
import {
    collection,
    getDocs,
    query,
    where,
  } from "firebase/firestore";


const ToDayOrder = () => {
    const dispatch = useDispatch()
    const [Data, setData] = useState();
    const navigiate = useNavigate();
    const Addmin = ()=>{
        navigiate('/addmin')
    }

    useEffect(() => {
        const getQuery = async () => {
          const today = new Date();
          const lastMonth = new Date(new Date().setDate(today.getDay()-1));
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

    const SingalView = (id)=>{
        navigiate(`/addmin/orderlist/${id}`)
    }

    const deleteItem = (id) => {
        deleteDoc(doc(firestore, "orderItem", id))
          .then((res) => {
            toast.error("Successfully Delect")
            dispatch(factOrder())
          })
          .catch((err) => toast.error(err.meg));
      };

  return (
    <div className='w-full h-full'>
        <div>
        <button onClick={Addmin} className=" bg-orange-300 py-2 px-12 hover:bg-orange-500 rounded-lg flex items-center justify-center gap-1">
          <BsArrowLeft className="text-[25px]" /> Addmin
        </button>
        </div>

        <div className='m-5 border-2 border-dashed border-red-300 p-5'>
            {Data && Data.map((item,index)=>{
                return(
                    <div key={index} className='flex items-center justify-between mb-2'>
                        <img src={item.user[0]?.photoURL} alt="" className='w-20 h-20 rounded-full' />
                        <h2>{item.user[0]?.displayName}</h2>
                        <h2>Order States: {item.orderStates}</h2>
                        <h2>Order Item :{item.item.length}</h2>
                        <h2>Total Price :{item.total}</h2>
                        <button onClick={()=>SingalView(item.uid)} className="py-2 px-8 bg-orange-400 text-white rounded-md">View</button>
                        <button onClick={()=>deleteItem(item.id)} className='py-2 px-8 bg-red-400 text-white rounded-md'>Delect</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ToDayOrder