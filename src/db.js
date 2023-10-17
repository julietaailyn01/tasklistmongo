import mongoose from "mongoose";

const connectdb = async () => {
    try{
        await mongoose.connect("mongodb://localhost/merndb");
    }catch(error){
        console.log(error);
    }
}