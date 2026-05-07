import "./App.css"
// import bootstrap link in the whole project
import "bootstrap/dist/css/bootstrap.min.css"
// import react-bootstrap
import { Container, Row, Col } from "react-bootstrap"
// import the NavBar
import MyNav from "./components/MyNav"
// import the footer
import MyFooter from "./components/MyFooter"
// import the Alert
import Welcome from "./components/Welcome"
// import books
// import AllTheBooks from "./components/AllTheBooks"
import books from "./data/fantasy.json"
import BookList from "./components/BookList"
import { BrowserRouter, Routes, Route } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <header>
          <MyNav></MyNav>
        </header>
        {/* without react-bootstrap */}
        {/* <div className="container">
    <div className="row">
      <div className="col"></div>
    </div>
  </div> */}
        <main className="flex-grow-1">
          <Welcome></Welcome>
          {/* with react-bootstrap */}
          <Container>
            <Row>
              <Col>
                <BookList books={books} />
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <MyFooter></MyFooter>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
