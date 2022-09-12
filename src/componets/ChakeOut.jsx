import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { toast } from 'react-hot-toast';
import { useStateValue } from '../contex/stateProvider';
import { getOrder, OrderCreact } from './FirebaseFuncation';
import { useNavigate } from "react-router-dom";

const ChakeOut = () => {
  const navigiate = useNavigate();
  const [{user },] = useStateValue();
    const cartItems = useSelector((state)=>state.cart.itemList);
    const subtotal = useSelector((state)=>state.cart.subtotal);

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [phone, setphone] = useState();
    const [region, setregion] = useState();
    const [city, setCity] = useState();
    const [post_code, setpost_code] = useState();
    const [address, setaddress] = useState();

    const districts = [
        { name: "Dhaka", division: "Dhaka" },
        { name: "Gazipur", division: "Dhaka" },
        { name: "Kishoreganj", division: "Dhaka" },
        { name: "Manikganj", division: "Dhaka" },
        { name: "Munshiganj", division: "Dhaka" },
        { name: "Narayanganj", division: "Dhaka" },
        { name: "Narsingdi", division: "Dhaka" },
        { name: "Tangail", division: "Dhaka" },
        { name: "Faridpur", division: "Dhaka" },
        { name: "Gopalganj", division: "Dhaka" },
        { name: "Madaripur", division: "Dhaka" },
        { name: "Rajbari", division: "Dhaka" },
        { name: "Shariatpur", division: "Dhaka" },
        { name: "Thakurgaon", division: "Rangpur" },
        { name: "Panchagarh", division: "Rangpur" },
        { name: "Gaibandha", division: "Rangpur" },
        { name: "Kurigram", division: "Rangpur" },
        { name: "Lalmonirhat", division: "Rangpur" },
        { name: "Nilphamari", division: "Rangpur" },
        { name: "Dinajpur", division: "Rangpur" },
        { name: "Rangpur", division: "Rangpur" },
        { name: "Barisal", division: "Barishal" },
        { name: "Barguna", division: "Barishal" },
        { name: "Bhola", division: "Barishal" },
        { name: "Jhalokati", division: "Barishal" },
        { name: "Patuakhali", division: "Barishal" },
        { name: "Pirojpur", division: "Barishal" },
        { name: "Brahmanbaria", division: "Chattogram" },
        { name: "Comilla", division: "Chattogram" },
        { name: "Chandpur", division: "Chattogram" },
        { name: "Lakshmipur", division: "Chattogram" },
        { name: "Maijdee", division: "Chattogram" },
        { name: "Feni", division: "Chattogram" },
        { name: "Khagrachhari", division: "Chattogram" },
        { name: "Rangamati", division: "Chattogram" },
        { name: "Bandarban", division: "Chattogram" },
        { name: "Cox's Bazar", division: "Chattogram" },
        { name: "Chittagong", division: "Chattogram" },
        { name: "Bagerhat", division: "Khulna" },
        { name: "Chuadanga", division: "Khulna" },
        { name: "Jashore", division: "Khulna" },
        { name: "Jhenaidah", division: "Khulna" },
        { name: "Khulna", division: "Khulna" },
        { name: "Kushtia", division: "Khulna" },
        { name: "Magura", division: "Khulna" },
        { name: "Meherpur", division: "Khulna" },
        { name: "Narail", division: "Khulna" },
        { name: "Satkhira", division: "Khulna" },
        { name: "Mymensingh", division: "Mymensingh" },
        { name: "Jamalpur", division: "Mymensingh" },
        { name: "Netrokona", division: "Mymensingh" },
        { name: "Sherpur", division: "Mymensingh" },
        { name: "Rajshahi", division: "Rajshahi" },
        { name: "Sirajganj", division: "Rajshahi" },
        { name: "Pabna", division: "Rajshahi" },
        { name: "Bogura", division: "Rajshahi" },
        { name: "Chapainawabganj", division: "Rajshahi" },
        { name: "Naogaon", division: "Rajshahi" },
        { name: "Joypurhat", division: "Rajshahi" },
        { name: "Natore", division: "Rajshahi" },
        { name: "Sylhet", division: "Sylhet" },
        { name: "Habiganj", division: "Sylhet" },
        { name: "Moulvibazar", division: "Sylhet" },
        { name: "Sunamganj", division: "Sylhet" },
      ];
      

      const Order = ()=>{
        if(!name || !email || !phone || !region || !city || !post_code || !address){
          toast.error("add all Data .....")
        }else{
          const data = {
            name:name,
            email:email,
            phone:phone,
            region:region,
            city:city,
            post_code:post_code,
            address:address,
            item:cartItems,
            user:user,
          }
          OrderCreact(data)
          toast.success('Successfully Order!')
          navigiate("/order")
        }
      }
      

  return (
    <div className='flex py-10 gap-4'>
        <div className='flex flex-1 flex-col items-start justify-center gap-3'>
            <h2>Add Your Address ......</h2>
            <div className='flex items-start flex-col w-full gap-2'>
                <label htmlFor="name">Enter Name</label>
                <input type="text" className='w-full border border-gray-400 bg-transparent rounded-lg outline-none p-1 ' name="name" id='name' value={name} onChange={(e)=>setname(e.target.value)} />
            </div>
            <div className='flex items-start flex-col w-full gap-2'>
                <label htmlFor="name">Phone</label>
                <input type="text" className='w-full border border-gray-400 bg-transparent rounded-lg outline-none p-1 ' name="name" id='name' value={phone} onChange={(e)=>setphone(e.target.value)} />
            </div>
            <div className='flex items-start flex-col w-full gap-2'>
                <label htmlFor="name">Enter Email</label>
                <input type="email" className='w-full border border-gray-400 bg-transparent rounded-lg outline-none p-1 ' name="name" id='name' value={email} onChange={(e)=>setemail(e.target.value)} />
            </div>

            <div className='flex items-start flex-col w-full gap-2'>
            <label htmlFor="region" className=''>
              Region <span>*</span>
            </label>
            <select
              name="region"
              id="region"
              value={region}
              onChange={(e) => setregion(e.target.value)}
              className='w-full border border-gray-400 bg-transparent rounded-lg outline-none p-1 '
            >
              <option value="" hidden>
                Select Region
              </option>
              <option value="Barishal">Barishal</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>

          <div className='w-full'>
            {region && (
              <div className="flex items-start flex-col w-full gap-2">
                <label htmlFor="city" className="">
                  Town / City <span>*</span>
                </label>
                <select
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className='w-full border border-gray-400 bg-transparent rounded-lg outline-none p-1 '
                >
                  <option value="" hidden>
                    Select District
                  </option>

                  {region &&
                    districts
                      .filter((dist) => dist.division === region)
                      .map((district,index) => (
                        <option key={index} value={district.name}>
                          {district.name}
                        </option>
                      ))}
                </select>
              </div>
            )}
          </div>

            <div className='flex items-start flex-col w-full gap-2'>
                <label htmlFor="name">Enter Address</label>
                <input type="text" className='w-full border border-gray-400 bg-transparent rounded-lg outline-none p-1 ' name="name" id='name' value={address} onChange={(e)=>setaddress(e.target.value)} />
            </div>
            <div className='flex items-start flex-col w-full gap-2'>
                <label htmlFor="name">Enter Post Code </label>
                <input type="text" className='w-full border border-gray-400 bg-transparent rounded-lg outline-none p-1 ' name="name" id='name' value={post_code} onChange={(e)=>setpost_code(e.target.value)}/>
            </div>
        </div>
        <div className='flex-1 ml-12'>
           <div className='border-dashed border-2 border-red-200 p-4 mt-16'>
                <h2 className='text-center text-[25px]'>Chack Out</h2>
                <div className='py-4 mb-5'>
                     <div className="flex items-center justify-between">
                        <h2 className=''>Product</h2>
                        <h4 className='w-40'>Name</h4>
                        <h4 className='w-20'>price</h4>
                        <h4 className='w-20'>quntity</h4>
                        <h4 className='w-20'>total</h4>
                    </div>
                    {cartItems && cartItems.map((item,index)=>{
                        return(
                            <div key={index} className="flex items-center justify-between gap-10">
                                <img src={item.feature_image} className=' w-16 h-16' alt="product" />
                                <h4 className='w-40'>{item.productname}</h4>
                                <h4 className='w-20'>$ {item.amount_item}</h4>
                                <h4 className='w-20'>{item.quantity}</h4>
                                <h4 className='w-20'>$ {item.total_price}</h4>
                            </div>
                        )
                    })}
                </div>

                <div className='flex items-center justify-between px-5 mb-3'>
                    <h2>Sub Total</h2>
                    <h2>$ {subtotal}</h2>
                </div>
                <div className='flex items-center justify-between px-5 mb-3'>
                    <h4>Delivery</h4>
                    <h4>$ 3</h4>
                </div>
                <div className='flex items-center justify-between px-5 mb-3'>
                    <h2>Total</h2>
                    <h2>$ {subtotal+3}</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <motion.button whileTap={{scale: 0.9}} onClick={Order} className=' bg-orange-500 text-white py-2 px-10 rounded-md hover:bg-orange-600'>Order Now</motion.button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default ChakeOut