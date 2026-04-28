const MyFooter = function () {
  return (
    <p
      className="text-center m-0 py-3 fs-5"
      style={{ backgroundColor: '#81bb9c', color: '#072b06' }}
    >
      EPIBOOKS - {new Date().getFullYear()}
    </p>
  )
}

export default MyFooter