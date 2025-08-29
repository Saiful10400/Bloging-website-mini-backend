import mongoose from "mongoose";
import config from "./config"
import app from "./app";
 



async function main(){
    try{
        await mongoose.connect(config.url as string,{dbName:"BootCamp-Blog"})
        app.listen(config.port,()=>{
            console.log(`this server is running at http://localhost:${config.port} port.`)
        })
    }
    catch(err){
        console.log(err)
    }
}

main() 