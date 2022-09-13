import React,{useEffect,useState} from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate,useParams } from 'react-router-dom';
import { collection, doc, getDocs, orderBy, query, setDoc,where } from "firebase/firestore"; 
import {firestore} from '../firebaseConfig'

const SingalOrderList = () => {

  const [Data, setData] = useState()
  const navigiate = useNavigate();
  const params = useParams()
  const Addmin = ()=>{
    navigiate('/addmin/orderlist')
  }

  console.log(params.orderId)

  useEffect(() => {
    const getQuery = async ()=>{
      const items = await getDocs(
          query(collection(firestore,"orderItem"),where("id", "==", params.orderId))
      );
      setData(items.docs.map((doc)=> doc.data())) 
  }
  getQuery()
  }, [])

  console.log(Data)

  return (
    <div className='h-[85vh]'>
      <div>
        <button onClick={Addmin} className=" bg-orange-300 py-2 px-12 hover:bg-orange-500 rounded-lg flex items-center justify-center gap-1">
            <BsArrowLeft className="text-[25px]" /> Order List
          </button>
      </div>

      <div>
          {Data && Data.map((item,index)=>{
            return(
              <div key={index} className="flex items-start justify-center gap-8">
                  <div className='w-[350px]'>
                    <img src={item.user.photoURL} alt="" className='w-20 h-20 rounded-full' />
                    <h2>{item.user.displayName}</h2>
                    <h2>Order Item :{item.item.length}</h2>
                    <h2>Total Price :{item.total}</h2>

                    <div>
                        
                    </div>
                  </div>
                  <div>
                    {item.item.map((it,ind)=>{
                      return(
                        <div key={ind} className='flex items-center justify-center gap-8'>
                            <img src={it.feature_image} alt="" className='w-40 h-40' />
                           <div>
                           <h2>Name : {it.productname}</h2>
                            <h2>Price :{it.amount_item}</h2>
                            <h2>Total Price :{it.total_price}</h2>
                            <h2>Quantity : {it.quantity}</h2>
                           </div>
                        </div>
                      )
                    })}
                  </div>
              </div>
            
            )
          })}
      </div>
    </div>
  )
}

export default SingalOrderList