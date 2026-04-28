import books from "../data/fantasy.json"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

function AllTheBooks() {
  return (
    <Container>
      <Row className="justify-content-center m-3 g-3">
        {books.map((book) => (
          <Col xs={6} md={4} lg={3} key={book.asin}>
            <Card className="h-100 d-flex flex-column">
              <Card.Img variant="top" src={book.img} />

              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}€</Card.Text>

                <Button variant="success" className="mt-auto">
                  Compra
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default AllTheBooks
