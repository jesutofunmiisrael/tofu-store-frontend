import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singleproduct = () => {
    const [product, setproduct] = useState({})
    const { id } = useParams()


    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        console.log("Feaching...")



        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()

            console.log(data);
            setproduct(data)

        } catch (error) {
            console.log(error);

        } finally {
            console.log("DONE!!!!!!!!!");

        }
    }
    return (
        <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.image}  width="200" />
      <p>{product.description}</p>

    </div>
    )
}

export default Singleproduct
