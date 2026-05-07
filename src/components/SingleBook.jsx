
import { Card, Button } from "react-bootstrap"

const SingleBook = function(props) {
 
    const book = props.book

    return (
      <>
        <Card
          onClick={() => props.onSelect(book.asin)}
          className="h-100 d-flex flex-column"
          style={{
            boxShadow: props.isSelected
              ? "0 4px 12px rgba(0, 128, 0, 0.5)"
              : "none",
            border: props.isSelected
              ? "1px solid rgba(0, 128, 0, 0.7)"
              : "1px solid grey",
            transition: "all 0.3s ease",
          }}
          data-testid="book-card"
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
      </>
    )
  
}

export default SingleBook
