export default function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;
    if (!name || name.length <= 3) {
      return res.status(422).json({ message: "failed" });
    }
    res.status(201).json({
      message: "successfull",
      data: { name },
    });
  }
}
