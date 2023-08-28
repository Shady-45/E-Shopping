import React from 'react'
import { useAppDispatch } from '../store/Store'
import { closeCartMessage } from '../Features/Modal/modalSlice'
const AddedToCart = () => {
    const dispatch = useAppDispatch()
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">E-Shopping</h2>
        <p>Your item has been added to the cart successfully.</p>
        <button
        onClick={()=>dispatch(closeCartMessage()) }
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default AddedToCart