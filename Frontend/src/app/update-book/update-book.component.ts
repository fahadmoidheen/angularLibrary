import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
title:String="Update Book"

  bookItem={
    title:'',
    author:'',
    genre:'',
    imageUrl:''
  }
  constructor(private booksService:BooksService,private router :Router) { }

  ngOnInit(): void {
    let title = localStorage.getItem("updatetitle");
    this.booksService.getBook(title).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  updateBook()
  {    
    this.booksService.updateBook(this.bookItem);   
    alert("Book updated");
    this.router.navigate(['books']);
  }
}
