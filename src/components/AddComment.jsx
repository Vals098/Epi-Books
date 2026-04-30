import { Component } from "react"
import { Form, Button } from "react-bootstrap"

const MY_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNjA1OGYwNDIwZDAwMTUxNTVhYzEiLCJpYXQiOjE3Nzc1NTc1OTIsImV4cCI6MTc3ODc2NzE5Mn0.Oa97vw7Dmu7M4EAK67lL6VGjCio3AF8Gk-Ih4diF0AQ"

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.asin,
    }

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        Authorization: MY_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Comment added!")
          this.setState({ comment: "", rate: "1" })
        } else {
          throw new Error("Loading Error")
        }
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
        // block the onClick event while typing the form
      <Form
        onSubmit={this.handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="mt-2"
      >
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Write a comment..."
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Select
            name="rate"
            value={this.state.rate}
            onChange={this.handleChange}
          >
            <option value="1">1 ⭐</option>

            <option value="2">2 ⭐</option>

            <option value="3">3 ⭐</option>

            <option value="4">4 ⭐</option>

            <option value="5">5 ⭐</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="success" size="sm">
          Add Comment
        </Button>
      </Form>
    )
  }
}

export default AddComment
