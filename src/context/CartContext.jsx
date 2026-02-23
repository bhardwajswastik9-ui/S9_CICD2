import React,{createContext,useContext,useState} from "react";

const CartContext = createContext();

export const CartProvider = ({children})=>{
  const [cart,setCart] = useState([]);
  const [message,setMessage] = useState("");

  const addToCart = (item)=>{
    setCart([...cart,item]);
    setMessage(`${item.name} added to cart 🛒`);
    setTimeout(()=>setMessage(""),2000);
  };

  // 🔴 Remove Item
  const removeFromCart = (index)=>{
    const removedItem = cart[index];
    const newCart = cart.filter((_,i)=>i!==index);
    setCart(newCart);
    setMessage(`${removedItem.name} removed ❌`);
    setTimeout(()=>setMessage(""),2000);
  };

  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,message}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = ()=>useContext(CartContext);

