"use client"


import {createContext, useContext, useState} from 'react';

interface CartContextProps{
    productCartQty:number
    addToBasket: (product: ) => void 

}
const CartContext = createContext<CartContextProps | null >(null)


interface Props{
    [propName: string]: any
}


export const CartContextProvider = (props: Props) =>{
    
    const [productCartQty, setProductCartQty] = useState(0)

    let value = {
        productCartQty
    }
    
    
    return(

        <CartContext.Provider value={value} {...props}/>

    )
}

const UseCart = () =>{
    
    const context  = useContext(CartContext)
    
    if(context == null){
        throw new Error("Bir hata oluştu")
    }

    return context

}


export default UseCart

