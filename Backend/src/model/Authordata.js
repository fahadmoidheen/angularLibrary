const mongoose=require('mongoose');
mongoose.connect(`mongodb://localhost:27017/angularLibraryDb`)
.then(()=>{
    console.log("database created")
})
const Schema =mongoose.Schema

const AuthorSchema =new Schema({
    author:String,
    language:String,
    genre:String,
    imageUrl:String
});
 var Authordata =mongoose.model('Authordata',AuthorSchema);
 module.exports=Authordata;