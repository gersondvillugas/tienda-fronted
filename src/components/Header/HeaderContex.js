
import React, { useState } from "react";
export const HeaderContext=React.createContext();
export const HeaderProvider=(props) =>{
  const [cart,setCart] =useState([])
  return(
    <HeaderContext.Provider value={[cart,setCart]}>
       {props.children}
   </HeaderContext.Provider>
  )
}