
export type Cart = {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}
export type ModalInitialState = {
    isOpen:boolean,
    addedToCart:boolean,
    openFilteredContainer:boolean
}
export type InitialState={
    cartItems :Cart[],
    products:Cart[],
    isLoading:boolean,
    selectedItems:SelectedItem[],
    amount:number,
    filteredItems:string[]
    total:number,
    selectedCategory:string
}
type SelectedItem = Cart & {
    quantity:number
}