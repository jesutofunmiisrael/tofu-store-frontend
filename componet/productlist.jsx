import { useState, useEffect } from "react";
import { toast } from "sonner";




const Product = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [quantity, setquantity] = useState(1)


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };


  // const displayProduct = search.trim()
  //   ? products.filter((p) =>
  //       p.title.toLowerCase().includes(search.toLowerCase())
  //     )
  //   : products;

  // const increase = () => {
  //   setquantity(prev => prev + 1);
  // };
  // const decrease = () => {
  //   if (quantity > 1) {
  //     setquantity(prev => prev - 1)
  //   }
  // }

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");
    const cartItem = {
      name: product.title,
      // amount: product.price,
      productPrice: product.price,
      quantity:1,
     
      image: product.image,

    }




    try {
      const response = await fetch("http://localhost:4005/api/cart", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(cartItem),

      })

      const data = await response.json()
      console.log(response);
      console.log(data);

      if (response.ok) {
        toast.success(`added to cart`)
      } else {
        toast.error(`fail to add`)
        // console.log(error.message);

      }






    } catch (error) {
      console.log(error);

    }
  }


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearch}
        style={{
          padding: "0.5rem",
          width: "250px",
          border: "1px solid gray",
          borderRadius: "6px",
        }}
      />
      <input
        type="file"
        placeholder="Search products..."
        value={search}
        style={{
          padding: "0.5rem",
          width: "250px",
          border: "1px solid gray",
          borderRadius: "6px",
        }}
      />


      <section>

        {products.length > 0 ? (
          <section
            style={{
              marginTop: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {products.map((ele) => (
              <div
                key={ele.id}
                style={{

                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <img src={ele.image} alt={ele.title} width={150} height={150} />
                <h2 style={{ fontSize: "1rem" }}>{ele.title}</h2>
                <p>${ele.price}</p>
                <p>{ele.category}</p>
                <button onClick={() => handleAddToCart(ele)}>Add to cart</button>





                <a href={`/singleproduct/${ele.id}`}>View Product</a>

              </div>
            ))}
          </section>
        ) : (
          <p>No products found.</p>
        )}
      </section>
    </div>
  );
};

export default Product;
