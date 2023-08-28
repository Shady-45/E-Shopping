import React from 'react'
import { useAppSelector,useAppDispatch } from '../store/Store'
import {AiFillFilter} from 'react-icons/ai'
import CartItem from './CartItem'
import AddedToCart from './AddedToCart'
import FilteredContainer from './FilteredContainer'
import { openFilterContainer } from '../Features/Modal/modalSlice'




const CartContainer = () => {
    
    const {openFilteredContainer} = useAppSelector((store)=>store.modal)
    const {filteredItems,products} = useAppSelector(store => store.carts)
    const dispatch = useAppDispatch()
const {addedToCart} = useAppSelector(store =>store.modal)  
    
  
  return (
    <>
    <div>
        {
            openFilteredContainer && <FilteredContainer/>
        }
        
<div className='px-5 py-36 mx-auto  '>
    <div onClick={()=>dispatch(openFilterContainer())} className=" flex cursor-pointer w-[7%]  items-center gap-2 bg-red-500  text-white mt-4 px-4 py-2 rounded">
    <AiFillFilter color='white'/>
    
        <span>   Filter   </span>           
    </div>
<div className='flex flex-wrap gap-8 justify-center -m-4'>
        {
            products.map((item)=>{
                return <CartItem key={item.id}  {...item} />
                
            })
        }
    </div>
</div>
{
    addedToCart && <AddedToCart/>
}
    </div>
    
    
    </>
  )
}

export default CartContainer