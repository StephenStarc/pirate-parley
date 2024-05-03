import { useParams } from "react-router-dom"
import PRODUCTS from "../PRODUCTS"
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from "../components/Rating"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
export default function ProductDetail() {
  const {id:productId} = useParams()
  
  const product = PRODUCTS.find((product) => product._id === productId)
  console.log(product)
   return (
    <Layout>
    <Link to='/' className="btn btn-light">Go Back</Link>
    <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid>     
            </Image>
        </Col>
        <Col md={4}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                   <Rating value={product.rating} name = {`${product.numReviews} Reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                            <strong>{product.countInStock > 0 ? 'In Stock' : "Out Of Stock"}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}
                        >
                            Add To Cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    
    </Layout>
  )
}
