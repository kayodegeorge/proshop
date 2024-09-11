const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  error.status = 404
  next(error)
}

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message

  //check
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message = 'resource n/f'
    statusCode = 400
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? 'true abeg' : err.stack,
  })
}

export { notFound, errorHandler }
