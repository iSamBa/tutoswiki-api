export default function (req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      ok: false,
      message: "Only logged in Admins have access to this resouce",
    });
  }
}
