import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/authors.model';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  title:String='Add Author'
  constructor(private authorService:AuthorService,private router:Router) { }
  authorItem=new  AuthorModel('','','','')
  ngOnInit(): void {
  }
  addauthor(){
    this.authorService.newAuthor(this.authorItem)
    alert("Author added to Library")
    this.router.navigate(['authors'])
  }
}
