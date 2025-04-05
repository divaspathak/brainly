import {model, Schema} from "mongoose"; 

const userSchema = new Schema({
    email: {
        type: String, 
        require: true, 
        unique: true
    }, 
    password: {
        type: String, 
        require: true
    }
})

export const userModel = model("User", userSchema); 