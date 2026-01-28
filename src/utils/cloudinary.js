import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //fs is file system it help to read wirte

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CODINARY_CLOUD_NAME, 
        api_key: process.env.CODINARY_API_KEY, 
        api_secret: process.env.CODINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
    });
    const upoladOnCloudinary =async (localFilePath)=>{
        try{
            if(!localFilePath) return null
        //upload the file on cloudinary
        const response=await cloudinary.uploader
        .upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploded successfully
        console.log("file is uploded on clodinary",response.url);
        return response;

        }catch(error){
            fs.unlinkSync(localFilePath) //remove the locally 
            // saved temporary file
            return null;
        }
    }
    export {upoladOnCloudinary}