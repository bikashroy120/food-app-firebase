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
import { getData } from "./componets/FirebaseFuncation";
import { actionType } from "./contex/reducer";
import { useEffect } from "react";

function App() {

  const [{ foodItems }, dispatch] = useStateValue();

  
  const factData = async ()=>{
    await getData().then((data)=>{
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data,
        })

    })
  }

  useEffect(()=>{
    factData();
  },[])

  return (

    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-[#f5f3f3f3]">
        <Header />
        <main className="mt-14 px-4 md:mt-20 md:px-16 py-4 w-full">
        
            <Routes>
                <Route path="/*" element={<MainContainer />} />
                <Route path="/creactItem" element={<CreactContainer />} />
            </Routes>
        </main>
    </div>
    </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
