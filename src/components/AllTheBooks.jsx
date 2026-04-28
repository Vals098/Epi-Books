import books from "../data/fantasy.json"
import { Container, Row, Col, Card, Button } from "react-bootstrap"


function AllTheBooks() {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        {books.map((book) => (
          <Col xs={12} lg={3} key={book.asin}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}€</Card.Text>
                <Button variant="primary">Compra</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default AllTheBooks
