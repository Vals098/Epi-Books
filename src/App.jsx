import "./App.css"
// import bootstrap link in the whole project
import "bootstrap/dist/css/bootstrap.min.css"
// import react-bootstrap
import { Container, Row, Col } from "react-bootstrap"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header></header>
      {/* without react-bootstrap */}
      {/* <div className="container">
    <div className="row">
      <div className="col"></div>
    </div>
  </div> */}
      <main className="flex-grow-1">
        {/* with react-bootstrap */}
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
