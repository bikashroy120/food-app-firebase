import React from 'react'
import Countdown from 'react-countdown';
import FlashSelseSlyder from './FlashSelseSlyder';



const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="">
          <span className=" bg-orange-500 text-white rounded-md mx-1 px-2 p-1">{hours}</span>:
          <span className="bg-orange-500 text-white rounded-md mx-1 px-2 p-1">{minutes}</span>:
          <span className="bg-orange-500 text-white rounded-md mx-1 px-2 p-1">{seconds}</span>
        </span>
      );
    }
  };

const FlashSelse = ({slyderItem}) => {
  return (
    <div>
        <div className='flex items-center gap-3'>
            <h2 className="m-0 text-[0.9rem] md:text-[1.5rem]">Flash Deals</h2>
            <div className=''>
              <span className='text-[]0.7rem md:text-[1rem]'>Ending in</span>
              <Countdown date={Date.now() + 10000000} renderer={renderer} />
            </div>
        </div>
        <div>
            <FlashSelseSlyder slyderItem={slyderItem}/>
        </div>
    </div>
  )
}

export default FlashSelse