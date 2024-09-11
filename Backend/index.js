import express from 'express';
import mongoose from 'mongoose';
import  dotenv  from 'dotenv';
import cors from 'cors';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();

app.use(cors());
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT || 4000;
const Mongo_URI = process.env.Mongo_URI;

// connect db
try{
mongoose.connect(Mongo_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
console.log("DB connected")
.then(() => console.log("mongodb connected sucessfuly"))
.catch((err) => console.log(err));

}catch(error){
console.log("Error:",error)
}

// defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});