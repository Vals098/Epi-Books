import books from "../data/fantasy.json"
import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"

function AllTheBooks() {
  return (
    <Container>
      <Row className="justify-content-center m-3 g-3">
        {books.map((book) => (
          <Col xs={6} md={4} lg={3} key={book.asin}>
          <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default AllTheBooks
