import express from "express";
import mongoose from "mongoose";
import route from "./routes/facilitatorRoutes.js";

const app = express();
const port =  4000
const db_conn = 'mongodb://localhost:27017/fdmsystem';


app.use(express.json())
app.use(route)

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(db_conn)
.then(() => {
console.log("Database Well connected");
})

