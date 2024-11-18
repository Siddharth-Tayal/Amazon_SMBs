import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  })

  res.cookie("jwt", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true, //cookie cannot be accessed by client side script
    sameSite: 'strict', //cookie is sent only to the same site as the one that originated the request
    secure: process.env.NODE_ENV !== "development" //cookie will only be sent over HTTPS

  })
}

export default generateTokenAndSetCookie