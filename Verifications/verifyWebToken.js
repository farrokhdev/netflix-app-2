const Jwt = require("jsonWebToken");

const verifyToken = (req, res, next) => {
  const headerToken = req.headers.token;
  if (headerToken) {
    const token = headerToken.split(" ")[1];
    console.log(token);
    Jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json("token is not valid!");
      }
      req.user = user;
      console.log(req.user);
      next();
    });
  } else {
    res.status(401).json("you are not authenticated");
  }
};

module.exports = verifyToken;
