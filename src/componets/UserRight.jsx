import React, { useState,useEffect } from 'react'

const UserRight = ({orderItems,user}) => {
 
    const [Order, setOrder] = useState([])
    const [States,setStates] = useState()
    const filterData = orderItems && orderItems.filter((item)=>item.user.uid=== user.uid)
    useEffect(() => {
      if(!States){
        const filterorg = filterData.filter((item)=>item.orderStates === "pandding")
        setOrder(filterorg)
      }else{
        const filterorg = filterData.filter((item)=>item.orderStates === States)
        setOrder(filterorg)
      }
    },[States])

  return (
    <div className=''>
        <div className='flex items-center justify-center flex-col'> 
            <h2 className='text-[35px] text-center'>Our Order</h2>
            <div className='text-center w-40 h-1 flex items-center justify-center bg-orange-400'></div>
        </div>

        <div className='flex items-center justify-center gap-3 mt-5 mb-5'>
            <button onClick={()=>setStates("pandding")} className=' bg-orange-400 text-white py-2 px-10 rounded-md hover:bg-red-500'>Pandding</button>
            <button onClick={()=>setStates("Completed")} className=' bg-orange-400 text-white py-2 px-10 rounded-md hover:bg-red-500'>Completed</button>
        </div>

    <div className='w-full h-full'>
    <div className=''>
            {
                Order.length ? Order.map((ite,ind)=> {
                  return(
                    <div key={ind} className=' bg-slate-200 p-5 flex flex-col gap-1 mb-4'>
                      <h2>Order Id : {ite.id}</h2>
                      <h2>Total : {ite.total}</h2>
                      {ite.item.map((ord,index)=>{
                    return(
                    <div key={index} className="flex items-center justify-start gap-6">
                      <img src={ord.feature_image} className="w-12 h-12" alt="" />
                      <h2>{ord.productname}</h2>
                      <h2>{ord.quantity}</h2>
                      <h2>{ord.total_price}</h2>
                    </div>
                  )
                })}
                    </div>
                  )
                }):(<div>
                  
                </div>)
             }
        </div>
    </div>

    </div>
  )
}

export default UserRight