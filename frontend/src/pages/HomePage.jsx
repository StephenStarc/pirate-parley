import { Row, Col } from "react-bootstrap"

import Product from "../components/Product"
import { useEffect, useState } from "react"
import axios from 'axios';

export default function HomePage() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const fetchProduct = async () => {
      const {data} = await axios.get('http://localhost:5000/api/products')
      setProducts(data)
    }
    fetchProduct()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
      {products.map((product)=>(
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
        </Col>
      ))}
      </Row>
    </>
  )
}