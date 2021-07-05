const mongoose=require('mongoose');
mongoose.connect(`mongodb://localhost:27017/angularLibraryDb`)
.then(()=>{
    console.log("database created")
})
const Schema =mongoose.Schema;

const SignSchema =new Schema({
    fname:String,
    lname:String,
    phonenumber:Number,
    Email:String,
    password:String,
    confirmpassword:String
});
const Signindata= mongoose.model('signindata',SignSchema);
module.exports=Signindata;

