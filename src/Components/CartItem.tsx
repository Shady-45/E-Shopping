import React from 'react'
import { Cart } from '../Types/type'
import { useAppDispatch } from '../store/Store'

import { addToCart} from '../Features/Carts/CartSlice'
import { showCartMessage } from '../Features/Modal/modalSlice'



const CartItem = ({id,title,price,category,description,image,rating}:Cart) => {
  const dispatch = useAppDispatch()
  
  


  return (
    <article className='lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer rounded-md shadow-md  '>
        <a href='/' className='block  h-32 rounded-md overflow-hidden '>
        <img  className='object-contain object-center  w-full h-full block ' src={image} alt={title} />
        </a>
        <div className='mt-4'>
        <h3 className='text-gray-200 spacing tracking-widest mb-1 uppercase'>{category}</h3>
        </div>
           <h2 className='text-gray-900 '>{title.split(" ").slice(0,3).join(" ")}</h2>
        <p className='mt-1 font-semibold'>${price}</p>
       <button onClick={()=>{
        dispatch(showCartMessage())
        dispatch(addToCart({id,title,price,description,category,image,rating}))}} className='bg-green-700  transition-colors hover:bg-green-800 text-white cursor-pointer py-[.5rem] rounded-sm px-[.5rem] border-green-800 border-2 '>Add to Cart</button>
        
    </article>
  )
}

export default CartItem