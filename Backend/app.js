const express =require('express')
const signindata=require('./src/model/Signindata')
const authordata=require('./src/model/Authordata')
const bookdata=require('./src/model/Bookdata')
const cors=require('cors')
const bodyParser = require('body-parser')
const jwt=require("jsonwebtoken")

var app =new express();
app.use(cors());
app.use(bodyParser.json())


//Middleware function

function verifyToken(req,res,next){
if(!req.headers.authorization){
    return res.status(401).send('Unauthorized request')
}
let token=req.headers.authorization.split('')[1]
if(token=='null'){
    return res.status(401).send('Unauthorized request')
}
let payload=jwt.verify(token,'secretKey')
console.log(payload)
if(!payload){
    return res.status(401).send('Unauthorized request')
}
req.userId=payload.subject
next()
}


//Books

app.post("/addbook",function(req,res){
    console.log(req.body);
    var item={
        title: req.body.book.title,
        author: req.body.book.author,
        genre: req.body.book.genre,
        imageUrl: req.body.book.imageUrl
    }
 var book=new bookdata(item);
 book.save();
})
//getting book from database
app.get('/books',function(req,res){
    
    bookdata.find()
                .then(function(books){
                    res.send(books);
                });
});
//Single book

app.get('/books/singlebook/:id',(req,res)=>{
    const id = req.params.id
    bookdata.findOne({"_id":id})
    .then((singlebook)=>{
        res.send(singlebook)
    })
})

//getting details from database for update book
app.get('/books/:id',  (req, res) => {
  
    const id = req.params.id;
      bookdata.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })

  //update book
app.put('/bookupdate',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    title =req.body.title,
    author=req.body.author,
    genre =req.body.genre,
    imageUrl =req.body.imageUrl

   bookdata.findByIdAndUpdate({"_id":id},
                                {$set:{"title":title,
                                "author":author,
                                "genre":genre,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })

 //Delete book
 app.delete('/removebook/:id',(req,res)=>{
   
    id = req.params.id;
    bookdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
    
// Author
//adding author to database
app.post("/addauthor",function(req,res){
    console.log(req.body);
    var item={
        author: req.body.author.author,
        language: req.body.author.language,
        genre: req.body.author.genre,
        imageUrl: req.body.author.imageUrl
    }
    var author=new authordata(item);
    author.save();

})

//getting author from databse
app.get('/authors',function(req,res){
    authordata.find()
                .then(function(authors){
                    res.send(authors);
                    console.log("inside then")
                })
                .catch((err)=>{
                    console.log(err)
                    console.log("inside catch")
                })
});

//Single auhtor
app.get('/authors/singleauthor/:id',(req,res)=>{
    const id = req.params.id
    authordata.findOne({"_id":id})
    .then((singleauthor)=>{
        res.send(singleauthor)
    })
})



//getting details from database for update author
app.get('/author/:id',  (req, res) => {
  
    const id = req.params.id;
      authordata.findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      });
  })
  //Author update
  app.put('/authorupdate',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    author =req.body.author,
    language=req.body.language,
    genre =req.body.genre,
    imageUrl =req.body.imageUrl

   authordata.findByIdAndUpdate({"_id":id},
                                {$set:{"author":author,
                                "language":language,
                                "genre":genre,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
       console.log("inside author then")
   })
.catch((err)=>{
    console.log(err)
    console.log("inside catch")
})
});
//Delete author
app.delete('/removeauthor/:id',(req,res)=>{
   
    id = req.params.id;
    authordata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

//User

app.post("/adduser",function(req,res){
    console.log(req.body);

    var item={
        fname: req.body.user.fname,
        lname: req.body.user.lname,
        phonenumber: req.body.user.phonenumber,
        Email: req.body.user.Email,
        password: req.body.user.password,
        confirmpassword:req.body.user.confirmpassword
    }
    var user=new signindata(item);
    user.save();

})

username="admin@gmail.com"
password="Admin@123"

app.post('/login',(req,res)=>{
    let userData=req.body

    if(!username){
        res.status(401).send("invalid username",{err})
        alert("invalid")
    }else 
    if(password !==userData.password){
        res.status(401).send("invalid password",{err})
        alert("invalid")
    }else{
        let payoload={subject:username +password}
        let token =jwt.sign(payoload,'secretKey')
        res.status(200).send({token})
    }
})

app.listen(7777,()=>{
    console.log("port is listening to 7777")
})