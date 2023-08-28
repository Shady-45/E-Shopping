import React,{useState} from 'react'
import { useAppSelector,useAppDispatch } from '../store/Store';
import MessageModal from './MessageModal';
import { openModal } from '../Features/Modal/modalSlice';
const Checkout = () => {
    const dispatch = useAppDispatch()
    const {isOpen} = useAppSelector((store)=>store.modal)
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telephone, setTelephone] = useState<number>();
    const [address, setAddress] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<number>();
    const [expiryDate, setExpiryDate] = useState<number>();
    const [cvv, setCvv] = useState<number>();
const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault()
    if(name && email && telephone && address && cardNumber && expiryDate && cvv){
    
        dispatch(openModal())
    }
    else{
        alert("Please fill the form")
    }

}
        return (
            <>
         
              <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
      <h1 className='text-2xl text-center font-bold'>Place Your Order</h1>
        <div className="mb-10 mt-10">
          <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mt-2 border border-gray-300 px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Telephone"
            className="w-full mt-2 border border-gray-300 px-3 py-2 rounded"
        
             onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                const newValue = parseInt(e.target.value)
                setTelephone(newValue) 
              }}
          />
          <textarea
            placeholder="Address"
            className="w-full mt-2 border border-gray-300 px-3 py-2 rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Payment Information</h2>
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border border-gray-300 px-3 py-2 rounded"
        
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                const newValue = parseInt(e.target.value)
                setCardNumber(newValue) 
              }}
          />
          <input
            type="text"
            placeholder="Expiry Date"
            className="w-full mt-2 border border-gray-300 px-3 py-2 rounded"
        
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                const newValue = parseInt(e.target.value)
                setExpiryDate(newValue) 
              }}          />
          <input
            type="text"
            placeholder="CVV"
            className="w-full mt-2 border border-gray-300 px-3 py-2 rounded"
        
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                const newValue = parseInt(e.target.value)
        setCvv(newValue) 
              }}
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Place Order
        </button>
      </form>
      {
        isOpen && <MessageModal name={name} />
      }
    </div>
  
            </>
     
    );
  };
 
  
  
  
  

  
  
  
  
  
export default Checkout