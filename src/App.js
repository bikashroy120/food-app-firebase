import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./componets/Header";
import './App.css'
import MainContainer from "./componets/MainContainer";
import CreactContainer from "./componets/CreactContainer";
import {AnimatePresence} from 'framer-motion'
import { useStateValue } from "./contex/stateProvider";
import { getData, getOrder } from "./componets/FirebaseFuncation";
import { actionType } from "./contex/reducer";
import { useEffect } from "react";
import ChakeOut from "./componets/ChakeOut";
import { Toaster } from "react-hot-toast";
import OrderPage from "./componets/OrderPage";
import Profile from "./componets/Profile";
import {useDispatch} from 'react-redux'
import { factOrder } from "./store/Order/order-actions";
import Addmin from "./componets/Addmin";
import OrderList from "./componets/OrderList";
import SingalOrderList from "./componets/SingalOrderList";

function App() {

  const [{ foodItems,orderItems }, dispatch] = useStateValue();
const dis = useDispatch()
  
  const factData = async ()=>{
    await getData().then((data)=>{
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data,
        })

    })
  }

  useEffect(()=>{
    dis(factOrder())
  },[dis])

  useEffect(()=>{
    factData();
  },[])


  return (

    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-[#f5f3f3f3]">
        <Header />
        <Toaster />
        <main className="mt-14 px-4 md:mt-20 md:px-16 py-4 w-full">
        
            <Routes>
                <Route path="/*" element={<MainContainer />} />
                <Route path="/addmin" element={<Addmin />} >
                </Route>
                <Route path="/addmin/creact" element={<CreactContainer />}/>
                <Route path="/addmin/orderlist" element={<OrderList />}/>
                <Route path="/addmin/orderlist/:orderId" element={<SingalOrderList />} />
                <Route path="/chackout" element={<ChakeOut />} />
                <Route path="/profile" element={<Profile />}/>
                <Route path="/order" element={<OrderPage />}/>
            </Routes>
        </main>
    </div>
    </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
