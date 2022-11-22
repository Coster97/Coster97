import express from "express"

const serverOpen = () => console.log("🌼 Server open 🌼");


import globalRouter from "./globalRouter";

const app = express();


app.use("/", globalRouter);



app.listen(7000, serverOpen)