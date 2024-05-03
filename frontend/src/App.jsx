import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Layout from "./components/Layout"
function App() {

  return (
    <>
    <Layout >
          <HomePage />
      </Layout>
    </>
  )
}

export default App
