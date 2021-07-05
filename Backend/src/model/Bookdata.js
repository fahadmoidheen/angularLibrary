const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/angularLibraryDb')
.then(()=>{
    console.log("database created")
})
const Schema =mongoose.Schema

const BookSchema =new Schema({
    title:String,
    author:String,
    genre:String,
    imageUrl:String
});
var Bookdata =mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;
