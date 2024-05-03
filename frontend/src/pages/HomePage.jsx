import { Row, Col } from "react-bootstrap"
import PRODUCTS from "../PRODUCTS"
import Product from "../components/Product"

export default function HomePage() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
      {PRODUCTS.map((product)=>(
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
        </Col>
      ))}
      </Row>
    </>
  )
}
