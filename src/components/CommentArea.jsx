const MY_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNjA1OGYwNDIwZDAwMTUxNTVhYzEiLCJpYXQiOjE3Nzc1NTc1OTIsImV4cCI6MTc3ODc2NzE5Mn0.Oa97vw7Dmu7M4EAK67lL6VGjCio3AF8Gk-Ih4diF0AQ"

import { useState, useEffect } from "react"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"

const CommentArea = function ({ asin }) {
  // state = {
  //   comments: [],
  //   isLoading: false,
  // }
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchComments = () => {
    // debug
    console.log("FETCH:", asin)

    // this.setState({ isLoading: true })
    setIsLoading(true)

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization: MY_TOKEN,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Comment fetch error")
        }
      })
      .then((data) => {
        // this.setState({
        //   comments: data,
        //   isLoading: false,
        // })
        setComments(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        // this.setState({
        //   isLoading: false,
        // })
        setIsLoading(false)
      })
  }

  // componentDidMount() {
  //   this.fetchComments()
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.fetchComments()
  //   }
  // }

  useEffect(() => {
    fetchComments()
  }, [asin])

  // render() {
  //   console.log(this.props.asin)

  return (
    <div className="mt-2">
      <h6>Comments:</h6>

      {isLoading && <p>Loading...</p>}

      {!isLoading && (
        <>
          <AddComment asin={asin} refreshComments={fetchComments} />

          <CommentsList comments={comments} />
        </>
      )}
    </div>
  )
}
// }

export default CommentArea
