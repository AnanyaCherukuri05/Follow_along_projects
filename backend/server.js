const{connect,connection}=require("mongoose")

const {app}=require("./app")
require("dotenv").config()

const port=process.env.PORT
const connect=require("./db/connections")
app.get("/user",async(req,res)=>{
    res.send("E-Commerce Application")
})

app.listen(port,async()=>{
    try{
        await connect
    
    console.log(`app is running on http://localhost:${port}`)
    }
    catch (err){
        console.log(err)
    }
})