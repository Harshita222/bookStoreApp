import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({ message: "user already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const cretedUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
    await cretedUser.save();
    res.status(201).json({ message: "user created successfully",user:{
        _id: cretedUser._id,
        fullname:cretedUser.fullname,
        email:cretedUser.email

    } });
  } catch (error) {
    res.status(500).json({ message: error});
  }
};


export const login = async(req, res) => {
try{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const isMatch = await bcrypt.compare(password, user.password)
    if(!user || !isMatch) {
        return res.status(400).json({ message: "Invalid username or password" });
    }else{
        res.status(200).json({ message:"Login successful", user:{
            _id: user._id,
            fullname: user.fullname,
            email: user.email

        },
    })
    }

}catch(error) {
    res.status(500).json({message: "Internal server error"});
}
}