import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:String="Authors"


  imageWidth: number = 150;
  imageMargin: number = 2;
  imageHeight:number=100

  Authors=[
    {
      author:'',
      language:'',
      genre:'',
      imageUrl:''
    }
  ]
  constructor(private authorsService:AuthorService,private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe((data)=>{
      this.Authors=JSON.parse(JSON.stringify(data))
    })
  }
  //single author

  singleAuthor(author:any){
    localStorage.setItem("author", author._id.toString());
    this.router.navigate(["singleauthor"])
  }


  //update author
  updateAuthor(author:any)
  {
    localStorage.setItem("updateauthor", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  //Delete author
  deleteAuthor(author:any)
  {
    this.authorsService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.Authors = this.Authors.filter(p => p !== author);
      })
  }
}
