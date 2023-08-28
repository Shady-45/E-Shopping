import React from 'react'
import { useAppSelector,useAppDispatch } from '../store/Store'
import {MdKeyboardArrowUp} from 'react-icons/md'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { decreaseQuantity, increaseQuantity, removeItem } from '../Features/Carts/CartSlice'
import { Link } from 'react-router-dom'

const ShoppingCart = () => {
    const {selectedItems }= useAppSelector((store)=>store.carts)
    const {total} = useAppSelector((store)=>store.carts)
    const dispatch = useAppDispatch()

    if (selectedItems.length <1){
        return <h1 className='py-[9.5rem] text-2xl font-bold text-center '>You Haven't added any Item in the cart 😔</h1>
    }
  return (
    <main className='py-[9.5rem]'>
        <h4 className='text-center text-4xl font-bold'>Order Summary</h4>
        <div className='flex flex-col'>
 <section className='flex  flex-col  gap-8  justify-center items-center'>
        {
            selectedItems.map((item)=>{
                return(
                    <article className='flex w-full  p-8 justify-between  md:justify-between items-center md:px-[30vw] '>
                        <div className='flex  items-center  gap-8'>
                        <img className='h-[4rem] w-[4rem]' src={item.image} alt={item.title} />
                        <div className='flex flex-col gap-2'>
                        <h3>{item.title.split(" ").slice(0,3).join(" ")}</h3>
                        <h4>{item.price}</h4>
                        <button onClick={()=>dispatch(removeItem(item.id))} className='bg-red-600  transition-colors hover:bg-red-800 text-white cursor-pointer py-[.2rem] rounded-sm px-[.1rem] border-red-800 border-2'>Remove from cart</button>
                        </div>
                        </div>
                        
                        <div className='flex flex-col gap-1 items-center'>
                            <MdKeyboardArrowUp onClick={()=>dispatch(increaseQuantity(item.id))} className='text-2xl cursor-pointer'/>
                            <p>{item.quantity}</p>
                            <MdKeyboardArrowDown onClick={()=>dispatch(decreaseQuantity(item.id))} className='text-2xl cursor-pointer'/>
                        </div>
                    </article>
                )
            })
        }
        
      
        </section>
        <header className='flex flex-col items-center justify-center gap-4'>
            <div className='flex items-center gap-4 '>
                <h1 className='text-2xl'>Total: </h1>
                <h2 className='text-xl'>${total.toFixed(2)}</h2>
            </div>
            <Link to='/checkout'>
            <button className='bg-green-700  transition-colors hover:bg-green-800 text-white py-2  cursor-pointer  rounded-sm px-[.5rem] border-green-800 border-2'>Proceed to CheckOut</button>
            </Link>
         
        </header>
        </div>
       
       

    </main>
  )
}

export default ShoppingCart