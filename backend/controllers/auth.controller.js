import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match" })
    }
    const user = await User.findOne({ username })
    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }

    //HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })
    if (newUser) {
      //Generate JWT token
      await newUser.save()

      generateTokenAndSetCookie(newUser._id, res)
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
      })
    }
    else {
      res.status(400).json({ message: "Invalid user data" })
    }

  } catch (error) {
    console.log("Error in signup controller", error)
    res.status(500).json({ message: "Internal server error" }, error.message, error.stack)
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    //Generate JWT token
    generateTokenAndSetCookie(user._id, res)

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic
    })
  } catch (error) {
    console.log("Error in login controller", error)
    res.status(500).json({ message: "Internal server error" }, error.message, error.stack)
  }
}

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 })
    res.status(200).json({ message: "Logged out successfully" })
  } catch (error) {
    console.log("Error in login controller", error)
    res.status(500).json({ message: "Internal server error" }, error.message, error.stack)
  }
}