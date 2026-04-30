const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.comment}</p>
          <small>⭐ {comment.rate}</small>
        </div>
      ))}
    </>
  )
}

export default CommentsList