export default (req, res) => {
  res.statusCode = 200
  res.json({content: 'testing api route'})
}