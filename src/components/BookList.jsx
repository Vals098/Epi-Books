import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    search: "",
  }

  render() {
    const filteredBooks = this.props.books.filter((book) =>
        // to make the reserch case insensitive
      book.title.toLowerCase().includes(this.state.search.toLowerCase()),
    )

    return (
      <Container>
       
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Search for a book title..."
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </Col>
        </Row>


        <Row className="justify-content-center m-3 g-3">
          {filteredBooks.map((book) => (
            <Col xs={6} md={4} lg={3} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default BookList