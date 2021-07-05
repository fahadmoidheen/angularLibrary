import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String="Books"

  imageWidth: number = 150;
  imageMargin: number = 2;
  imageHeight:number=100
  
  Books=[
    {
      title:'',
      author:'',
      genre:'',
      imageUrl:''
    }
  ]
  constructor(private booksService:BooksService,private router:Router,public _auth :AuthService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data)=>{
      this.Books=JSON.parse(JSON.stringify(data));
  })
  }

  singleBook(book:any){
    localStorage.setItem("title", book._id.toString());
    this.router.navigate(["singlebook"])
  }


  //updatebook
  updateBook(book:any)
  {
    localStorage.setItem("updatetitle", book._id.toString());
    this.router.navigate(['updatebook']);

  }
  //Deletebook
  deleteBook(book:any)
  {
    this.booksService.deleteBook(book._id)
      .subscribe((data) => {
        this.Books = this.Books.filter(p => p !== book);
      })
  }

}
