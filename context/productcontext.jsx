import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext ()
 const ProductProvider = ({children}) =>{
    const [product, setproduct] = useState ({})

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:4005/api/products/getproduct");
        const data = await res.json();
        console.log(data);
        
        setproduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);


  const value = {
    product
  }

  return(
<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
 }

 export default ProductProvider




