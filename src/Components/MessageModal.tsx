import React from 'react'
import { useAppDispatch } from '../store/Store'
import { closeModal } from '../Features/Modal/modalSlice'

type MessageProps ={
    name:string
}
const MessageModal:React.FC<MessageProps> = ({name}) => {
    const dispatch = useAppDispatch()
  return (
    
    <>
    <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-black bg-opacity-50 absolute inset-0" ></div>
          <div className="bg-white p-6 rounded shadow-md z-20">
            <h2 className="text-lg font-semibold mb-4">E-Shopping</h2>
            <p>{` ${name} Thanks For ordering with us....😊😊`}</p>
            <button onClick={()=>dispatch(closeModal())} className="bg-red-500 text-white mt-4 px-3 py-2 rounded">
              Close
            </button>
          </div>
        </div>
    </>
  )
}

export default MessageModal