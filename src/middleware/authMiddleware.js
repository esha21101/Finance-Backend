const authorizeRole = (allowedRoles) => {
  return (req, res, next) => {
    const role = req.headers.role;

    if (!role) {
      return res.status(401).json({ message: "Role header missing" });
    }

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};

module.exports = { authorizeRole };