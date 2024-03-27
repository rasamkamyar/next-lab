export default function handler(req, res) {
  const { params } = req.query;
  res.status(200).json({
    message: "CATCH ALL",
    params,
  });
}
