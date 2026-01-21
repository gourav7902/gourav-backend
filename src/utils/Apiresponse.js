class Apiresponse{
    constructor(statuscode,data,message="Sucecess"){
        this.statuscode=statuscode
        this.data=data
        this.message=message
        this.Sucecess=statuscode < 400
    }
}