import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

class BookList extends Component {
  state = {
    search: "",
    selectedAsin: null,
  }

  handleSelect = (asin) => {
   return this.setState({ selectedAsin: asin })
  }

  render() {
    const filteredBooks = this.props.books.filter((book) =>
      // to make the reserch case insensitive
      book.title.toLowerCase().includes(this.state.search.toLowerCase()),
    )

    return (
      <Container>
        <Row>
          {/* BOOK GRID */}
          <Col xs={12} md={8}>
            {/* search input */}
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
            {/* books */}
            <Row className="justify-content-center m-3 g-3">
              {filteredBooks.map((book) => (
                <Col xs={6} md={4} lg={3} key={book.asin}>
                  {/* add onSelect and isSelected */}
                  <SingleBook book={book} onSelect={this.handleSelect} isSelected={this.state.selectedAsin === book.asin}/>
                </Col>
              ))}
            </Row>
          </Col>
          {/* COMMENT AREA */}
          <Col xs={12} md={4}>
            {/* if selected is true show comment area */}
            <div className="mt-3">
              {this.state.selectedAsin ? (
                <CommentArea asin={this.state.selectedAsin} />
              ) : (
                <p className="text-muted">Select a book to see comments</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookList
