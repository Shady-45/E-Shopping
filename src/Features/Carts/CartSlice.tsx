import {createSlice,createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import { Cart, InitialState } from '../../Types/type'

const initialState:InitialState ={
    cartItems:[],
    isLoading:false,
    selectedItems:[] ,
    filteredItems:[],
    products:[],
    selectedCategory:"All",
    amount:0,
    total:0
}
const url:string ='https://fakestoreapi.com/products'
export const getCartData = createAsyncThunk<Cart[]>('cart/getCartItems',async ()=>{
    try {
        const resp = await fetch(url)
        return resp.json()
    } catch (error) {
        return console.log('something went wrong');
    }
})

const cartSlice = createSlice({
    name:"carts",
    initialState,
    reducers:{
        setCartItems:(state)=>{
            state.cartItems =state.products
        },
addToCart :(state,action:PayloadAction<Cart>)=>{
    const isItemInCart = state.selectedItems.some((item)=>item.id === action.payload.id)
    if(!isItemInCart){
        state.selectedItems.push({...action.payload, quantity:1})
    }
   },
   filterByCategory:(state)=>{
    
    
    const newList = ["All", ...new Set(state.cartItems.map((item)=>item.category))];
    state.filteredItems = newList
   },
   sortByPriceInAscending:(state)=>{
    state.products = state.products.slice().sort((a,b)=>a.price - b.price)
   },
   sortByPriceInDescending:(state)=>{
    state.products = state.products.slice().sort((a,b)=>b.price -  a.price)
   },
   filterCartItems:(state,action:PayloadAction<string>)=>{
    
    if (action.payload === 'All'){
            state.products = state.cartItems
    }
    else{
        state.products = state.cartItems.filter((item)=>item.category === action.payload)
    }

state.selectedCategory = action.payload
   },
removeFromCart :(state,{payload}:PayloadAction<number>) =>{
    state.cartItems = state.cartItems.filter((item)=>item.id !== payload)
},
removeItem :(state,action:PayloadAction<number>)=>{
    state.selectedItems = state.selectedItems.filter((item)=>item.id !== action.payload)
},
increaseQuantity :(state,action:PayloadAction<number>)=>{
    const item = state.selectedItems.find((ele)=> ele.id === action.payload)
    if (item){
        item.quantity+=1
    }
},
decreaseQuantity :(state,action:PayloadAction<number>)=>{
    const item = state.selectedItems.find((ele)=> ele.id === action.payload)
    if(item){
        if(item.quantity >1){
            item.quantity-=1
        }
        else{
            state.selectedItems = state.selectedItems.filter((item)=>item.id !== action.payload)
        }
    }
},
totalAmount:(state)=>{
    let amount=0
    let total = 0
    state.selectedItems.forEach((item)=>{
        amount +=item.quantity 
        total+= item.quantity * item.price
    })
    
    state.total = total
    state.amount=amount
}
    },extraReducers:(builder)=>{
        builder.addCase(getCartData.pending,(state)=>{
            state.isLoading = true
        }).addCase(getCartData.fulfilled,(state,action)=>{
            state.isLoading = false
            state.cartItems =action.payload
            state.products = action.payload
        }).addCase(getCartData.rejected,(state)=>{
            state.isLoading = false
        })
    }
})
export const {addToCart ,filterByCategory, removeFromCart,removeItem,increaseQuantity,decreaseQuantity,totalAmount,filterCartItems,setCartItems,sortByPriceInAscending,sortByPriceInDescending} = cartSlice.actions

export default cartSlice.reducer