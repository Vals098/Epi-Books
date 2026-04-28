import { Alert } from "react-bootstrap"

function Welcome() {
  return (
    <Alert variant="success" className="text-center mt-3">
      <h1>Welcome to EpiBooks!</h1>
      <p>Find your next adventure</p>
    </Alert>
  )
}

export default Welcome