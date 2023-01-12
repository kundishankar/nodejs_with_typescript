import mongoose, { mongo } from "mongoose";

class Index {
    connectToMongoDb(){
        const db: any = 'mongodb://' + process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@"+ process.env.DB_HOST + "/" + process.env.DB+'?authSource=admin';
        mongoose.connect(db,{directConnection:true}).then((data)=>{console.log("db connected")}).catch(err => console.log(err))
    }
}

export const index = new Index();