import {useParams, useNavigate } from "react-router-dom"
import {Row, Col, Image, ListGroup, Card, Button,Form, ListGroupItem} from 'react-bootstrap'
import Rating from "../components/Rating"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import { useGetProductsDetailsQuery } from "../slices/productApi"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { useState } from "react"
import { addToCart } from "../slices/cartSlice"
import { useDispatch, useSelector } from "react-redux"

export default function ProductDetail() {

    const {id:productId} = useParams()
    const [qty,setQty] = useState(1)

    const dispatch = useDispatch()
    const navigate = useNavigate()

   const {data:product,isError,isLoading} = useGetProductsDetailsQuery(productId)
   const addToCartHandler = () => {
    dispatch(addToCart({...product, qty}))
    // navigate('/cart')
}

   return (
    <>
    {isLoading ? (<Loader />) : isError ? (<Message variant='danger'>{isError?.data?.message || isError.error}</Message>) : (<>
        <Layout>
<Link to='/' className="btn btn-light" >Go Back</Link>
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
                {product.countInStock > 0 && (
                    <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col>
                            <Form.Control as='select' value={qty} onChange={(e)=>setQty(Number(e.target.value))} >
                                {[...Array(product.countInStock).keys()].map(x => (
                                    <option key={x+1} value={x+1}>
                                        {x+1}
                                    </option>
                                ))}
                            </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
                <ListGroup.Item>
                    <Button className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                    >
                        Add To Cart
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </Col>
</Row>

</Layout>
    </>)}
    </>
  )
}

