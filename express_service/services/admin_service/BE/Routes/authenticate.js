const jwtmod = require('jsonwebtoken');;

module.exports = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader);
  const token = bearerHeader && bearerHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;

  const decodedToken = jwtmod.verify(token, public_key, {
    algorithms: ["RS256"],
  });
  console.log(decodedToken.resource_access.account.roles);

  const { email } = decodedToken;
  req.user = email;
  next();
};