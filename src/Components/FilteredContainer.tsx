import React,{useEffect} from 'react'
import { useAppSelector,useAppDispatch } from '../store/Store'
import { closeFilterContainer } from '../Features/Modal/modalSlice'
import {AiFillCloseCircle} from 'react-icons/ai'
import { filterByCategory, filterCartItems, sortByPriceInAscending, sortByPriceInDescending } from '../Features/Carts/CartSlice'
const FilteredContainer = () => {
    const dispatch = useAppDispatch()
    const {openFilteredContainer} = useAppSelector(store=>store.modal)
    const {filteredItems} = useAppSelector((store)=>store.carts)
    useEffect(()=>{
        dispatch(filterByCategory())
    },[dispatch])
    
  return (
    <>
       <main
      className={`fixed h-screen top-[6rem] left-0 w-[15%] bg-white ${
        openFilteredContainer ? 'left-0' : '-left-full'
      }`}
    >
        <div className='flex justify-between items-center p-2'>
    

<button onClick={()=>dispatch(closeFilterContainer())}><AiFillCloseCircle  className='text-2xl text-red-500' /></button>
        </div>
<section>
    <ul className='flex flex-col items-start gap-4 p-4'>
        {
            filteredItems.map((item,index)=>{
                return(
                    <li key={index} onClick={()=>{
                        dispatch(filterCartItems(item))
                        dispatch(closeFilterContainer())
                    }} className='list-none cursor-pointer '>{item}</li>
                )
            })
        }
    </ul>
    <ul className='flex flex-col items-start gap-4 p-4'>

        <li onClick={()=>{
            dispatch(sortByPriceInAscending())
            dispatch(closeFilterContainer())
        }} className='list-none cursor-pointer'>Price (Low - High)</li>
        <li onClick={()=>{
            dispatch(sortByPriceInDescending())
            dispatch(closeFilterContainer())
        }} className='list-none cursor-pointer'>Price (High - Low)</li>

       </ul>
</section>
    </main>
    
   </>
  )
}

export default FilteredContainer