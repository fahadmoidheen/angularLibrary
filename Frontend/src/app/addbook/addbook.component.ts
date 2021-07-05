import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { BookModel } from '../books/books.model';
import { NgModel,FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title:string='Add Book'


  constructor(private booksService:BooksService,private router:Router,private fb:FormBuilder) { }

  bookItem= new BookModel('','','','')
  ngOnInit(): void {
  }
  addBook(){
    this.booksService.newBook(this.bookItem)
    alert("Book added to Library")
    this.router.navigate(['books'])
  }

}
