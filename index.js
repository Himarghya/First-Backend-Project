import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const Password = "ILoveCoding";
var PasswordUser = "";

app.use(bodyParser.urlencoded({extended:true}));
//It will send server the index.html
app.get("/" , (req, res) =>
{
   res.sendFile(__dirname + "/public/index.html");
})

function PasswordChecking(req , res , next){
PasswordUser = req.body["password"];
if(PasswordUser === Password)
{
   next();
}
else{

}
}
app.use(PasswordChecking);

//After clicking the submit button You will receive this 
app.post("/check" , (req , res) =>
{
    res.sendFile(__dirname + "/public/secret.html")
})
// Listening for the port
app.listen(port , () =>{
    console.log(`Our port is runnind at port ${port}`);
})