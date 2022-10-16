import React from 'react'
import { useStateValue } from '../../contex/stateProvider';

const Catagory = () => {
    const [{ foodItems},] = useStateValue();

    console.log(foodItems)
  return (
    <div className='container'>
        Catagory
    </div>
  )
}

export default Catagory