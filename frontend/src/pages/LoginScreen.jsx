import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
const LoginScreen = () => {
    // State hooks to manage email and password inputs
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [login, { isLoading }] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)
    
    const { search } = useLocation()
    const sp = new URLSearchParams(search)
    const redirect = sp.get('redirect') || '/'
    
    useEffect(()=>{
        if(userInfo){
            navigate(redirect)
        }
    },[userInfo, redirect,navigate])
    /**
     * Event handler for form submission
     * @param {Event} e - The form submission event
     */
    const submitHandler = async (e) => {
        e.preventDefault() // Prevent form submission
        console.log('here')
       try{
        const res = await login({email, password}).unwrap()
    dispatch(setCredentials({...res}))  
    navigate(redirect)
    }catch(error){
        console.log(error)
        toast.error(error?.data?.message || error.error)
    }
    }

    return (
        <FormContainer>
            <h1>Sign In</h1> {/* Heading for the login form */}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label> {/* Label for email input */}
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control> {/* Email input */}
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label> {/* Label for password input */}
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control> {/* Password input */}
                </Form.Group>
                <Button type='submit' variant='primary' className='mt-2' disabled={isLoading}> {/* Submit button */}
                    Sign In
                </Button>
                {isLoading && <Loader />}
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect} `: '/register'}>Register</Link> {/* Link to registration form */}
                </Col>
            </Row>  
        </FormContainer>
    )
}
export default LoginScreen