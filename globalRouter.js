import express from "express";
import { userFindPass } from "./contact";

const globalRouter = express.Router();

globalRouter.get("/", (req,res)=>{
    res.sendFile(__dirname + '/html/index.html')
});
globalRouter.get("/about", (req,res)=>{
    res.sendFile(__dirname + '/html/about.html')
});
globalRouter.get("/port", (req,res)=>{
    res.sendFile(__dirname + '/html/port.html')
});
globalRouter.get("/contact", (req,res)=>{
    res.sendFile(__dirname + '/html/contact.html')
});

globalRouter.get("/send", userFindPass)

//globalRouter.get("/howmany", userIn)

export default globalRouter;