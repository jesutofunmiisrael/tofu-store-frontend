import React, { useEffect } from 'react'

import { useState } from 'react'
import { toast } from 'sonner';

const Cart = () => {
  const [product, setProduct] = useState([])
  const token = localStorage.getItem("token");
  const [incrementing, setIncrementing] = useState("")
  const [decrement, setdecrement] = useState ("")

  const increase = async (cartId) => {
    setIncrementing(cartId)
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:4005/api/cart/${cartId}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(`increase succesfully`)
        fetchProducts()
      } else {
        toast.error("Failed to increment")
      }

    } catch (error) {
      console.log(error);
    }finally{
      setIncrementing("")
    }
  }


  const  decrease = async (cartId) =>{
setdecrement (cartId)

     const token = localStorage.getItem("token");

     try {
      const response = await fetch (`http://localhost:4005/api/cart/${cartId}/decrease`,{
        method:"PUT",
        
        headers:{
            "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
            body: JSON.stringify(),
      })
      const data = await response.json()
         if (response.ok) {
        toast.success(`decrease succesfully`)
        fetchProducts()
      } else {
        toast.error("Failed to decrease")
      }
     } catch (error) {
      console.log(error);
      
     }finally{}
  }

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4005/api/cart/getcartitem", {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify()
      })
      const data = await res.json();
      console.log(data)
      setProduct(data.data)
    } catch (error) {
      console.log(error);

    }
  };
  useEffect(() => {

    fetchProducts();
  }, [])

  console.log(product);
  

  return (
    <div>


      <section style={{display: "grid", padding: "1rem", gap: "1rem"}}>

        {
          product?.map((ele, index) => (
            <div key={index} style={{display: "flex", gap: "1rem"}}>
              <img src={ele.image} alt="" width={100} />
              <div>
                <h2>{ele.name}</h2>
                <p>${ele.amount}</p>
              </div>

              {/* <p>{ele.category}</p> */}
              <div style={{display: "flex", gap: "0.5rem", alignItems: "center"}}>
                <button style={{padding: "0.5rem", background: "black", color: "white", border: "none"}} onClick={() => decrease(ele._id)}>-</button>
                <p>{incrementing === ele._id ? "C" : ele.quantity}</p> 
                
                <button style={{padding: "0.5rem", background: "black", color: "white", border: "none"}} onClick={()=>increase(ele._id)}>+</button>
              </div>
            </div>
          ))

        }

      </section>


    </div>
  )
}

export default Cart
