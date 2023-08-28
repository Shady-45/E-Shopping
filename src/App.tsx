import React,{useEffect} from 'react';

import { useAppDispatch,useAppSelector } from './store/Store';
import {  getCartData, totalAmount } from './Features/Carts/CartSlice';
import CartContainer from './Components/CartContainer';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation()
  const {cartItems ,isLoading,selectedItems} = useAppSelector((store)=>store.carts)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getCartData())
    
  },[dispatch])

  useEffect(()=>{
    dispatch(totalAmount())
  },[selectedItems])

  if (isLoading){
    return(
      <div className='fixed inset-0 flex items-center justify-center z-10'>
        <ClipLoader
        color='red'
        loading={isLoading}
        
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    )
  }
  
  const hideNav = location.pathname === '/checkout'
  return (
    <>
    <main>
      {
        !hideNav &&  <Navbar/>
      }
   
    <Routes>

      <Route element={   <CartContainer/>}  path='/'/>
 
   
    <Route element={<ShoppingCart/>} path='/cart' />
    <Route element={<Checkout/>} path='/checkout' />
    </Routes>
    
   
    </main>
  
     
    </>
  
  );
}

export default App;
