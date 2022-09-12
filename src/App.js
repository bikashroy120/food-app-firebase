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

function App() {

  const [{ foodItems,orderItems }, dispatch] = useStateValue();

  
  const factData = async ()=>{
    await getData().then((data)=>{
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data,
        })

    })
  }

  const factOrder = async ()=>{
    await getOrder().then((data)=>{
        dispatch({
          type: actionType.SET_ORDER_ITEMS,
          orderItems: data,
        })

    })
  }

  useEffect(()=>{
    factData();
  },[])

  useEffect(()=>{
    factOrder();
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
                <Route path="/creactItem" element={<CreactContainer />} />
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
