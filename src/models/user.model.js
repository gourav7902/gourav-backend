import mongoose,{Schema} from "mongoose";

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, ///cloudnary url use
        required:true,
    },
    coverImage:{
        type:String, ///cloudnary url use
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    password:{
        type:String,
        required:[true,'password is required']
    },
    refreshToken:{
        type:String
    }



},{
    timeseries:true //this give created at and upadted at
}
)



export const User=mongoose.model("User",userSchema)