import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {FaShoppingBag} from 'react-icons/fa'
import { useAppSelector } from '../store/Store'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const {selectedItems} = useAppSelector((store)=>store.carts)
  return (
   
    <section className=' fixed top-0 left-0 h-[6rem]  bg-red-600 py-4 px-[4rem]  shadow-lg flex items-center justify-between w-full '>
      <Link to='/'>
      <div className='  p-4 flex items-center gap-4'>
      <FaShoppingCart className='cursor-pointer  text-white text-3xl'/>
      <h1 className=' text-white text-2xl cursor-pointer '>E-Shopping</h1>
    </div>
      </Link>
   
    <div className='nav-items'>
      <Link to='/cart' >
      <FaShoppingBag className='cursor-pointer  text-white text-3xl '/>
      </Link>
      
      <div className="items-added">
        <button className='fixed top-[.7rem] right-[2.9rem] bg-white h-[30px] w-[30px] rounded-[50%]'>{selectedItems.length}</button>
      </div>
    </div>
    </section>
 
  )
}

export default Navbar