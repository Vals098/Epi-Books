const MY_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNjA1OGYwNDIwZDAwMTUxNTVhYzEiLCJpYXQiOjE3Nzc1NTc1OTIsImV4cCI6MTc3ODc2NzE5Mn0.Oa97vw7Dmu7M4EAK67lL6VGjCio3AF8Gk-Ih4diF0AQ"

import { Component } from "react"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
  }

  fetchComments = () => {
    // debug
    console.log("FETCH:", this.props.asin)

    this.setState({ isLoading: true })

    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization: MY_TOKEN,
        },
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Comment fetch error")
        }
      })
      .then((data) => {
        this.setState({
          comments: data,
          isLoading: false,
        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          isLoading: false,
        })
      })
  }

  componentDidMount() {
    this.fetchComments()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments()
    }
  }

  render() {
    console.log(this.props.asin)

    return (
      <div className="mt-2">
        <h6>Comments:</h6>

        {this.state.isLoading && <p>Loading...</p>}

        {!this.state.isLoading && (
          <>
            <AddComment
              asin={this.props.asin}
              refreshComments={this.fetchComments}
            />

            <CommentsList comments={this.state.comments} />
          </>
        )}
      </div>
    )
  }
}

export default CommentArea
