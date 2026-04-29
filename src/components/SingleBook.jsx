import { Component } from "react"
import { Card, Button } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    selected: false,
  }
  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    const book = this.props.book

    return (
      <Card
        onClick={this.toggleSelected}
        className="h-100 d-flex flex-column"
        style={{
          boxShadow: this.state.selected
            ? "0 4px 12px rgba(0, 128, 0, 0.5)"
            : "none",
          border: this.state.selected
            ? "1px solid rgba(0, 128, 0, 0.7)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <Card.Img variant="top" src={book.img} />

        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price}€</Card.Text>

          <Button variant="success" className="mt-auto">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
