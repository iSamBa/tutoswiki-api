export default function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({
      ok: false,
      message: "You are not authenticated ! Please login first",
    });
  }
}
