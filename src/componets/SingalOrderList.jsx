import React,{useEffect,useState} from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate,useParams } from 'react-router-dom';
import { collection, doc, getDocs, query ,updateDoc,where } from "firebase/firestore"; 
import {firestore} from '../firebaseConfig'
import { toast } from 'react-hot-toast';
import {useDispatch} from 'react-redux'
import { factOrder } from '../store/Order/order-actions';

const SingalOrderList = () => {
 
  const [Data, setData] = useState()
  const [orderStates,setorderStates] = useState()
  const navigiate = useNavigate();
  const params = useParams()

  console.log(params)
  const Addmin = ()=>{
    navigiate('/addmin/orderlist')
  }
  console.log(orderStates)
  const dispatch = useDispatch()
  useEffect(() => {
    const getQuery = async ()=>{
      const items = await getDocs(
          query(collection(firestore,"orderItem"),where("uid", "==", Number(params.orderId)))
      );
      setData(items.docs.map((doc)=> {
          return {...doc.data(),id:doc.id}
      })) 
  }
  getQuery();
  }, [])

  console.log(Data)
  const updateData = async (id) => {
    const dostoupdate = doc(firestore, "orderItem", id);
    await updateDoc(dostoupdate, {
      orderStates: orderStates,
    })
      .then(() => {
        toast.success('Successfully Update')
        dispatch(factOrder())
      })
      .catch((err) => {
        toast.error("No document to update")
        console.log(err)
      });
  };

  // setLodding(true);
  //           const dostoupdate = doc(firestore, "user", user[0]?.uid);
  //           updateDoc(dostoupdate, {
  //             address: address,
  //             country: contry,
  //             dathBarth: barthday,
  //             displayName:name,
  //             gender:gender,
  //             phone:phone,
  //           })
  //             .then((res) => {
  //               toast.success('Successfully Profile update!')
  //               setLodding(false);
  //               setShow(false)
  //               dispatch(getUserData(user[0]?.uid))
  //             })
  //             .catch((err) => alert(err.message));

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
                    <img src={item.user[0]?.photoURL} alt="" className='w-20 h-20 rounded-full' />
                    <h2>{item.user[0]?.displayName}</h2>
                    <h2>Order Item :{item.item.length}</h2>
                    <h2>Total Price :{item.total}</h2>

                    {item.orderStates==="Completed"? (<div>
                        <h1>Order Completed</h1>
                    </div>):(
                      <div>
                      <div className="flex items-start flex-col w-full gap-1 mt-5">
                          <label htmlFor="city" className="">
                            Update States<span>*</span>
                          </label>
                          <select
                            name="city"
                            id="city"
                            value={orderStates}
                            className='w-full border border-gray-400 bg-transparent rounded-lg outline-none p-1 '
                            onChange={(e)=>setorderStates(e.target.value)}
                          >
                            <option value="pandding">
                            Pandding
                            </option>
                            <option value="Completed">
                            Completed
                            </option>
                          </select>
                      </div>

                      <div className='mt-5'>
                        <button onClick={()=>updateData(item.id)} className='py-2 px-8 bg-orange-400 rounded-md text-white'>Update</button>
                      </div>
                  </div>
                    )}
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