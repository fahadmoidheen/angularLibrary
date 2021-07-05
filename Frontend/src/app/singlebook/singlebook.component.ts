import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  title:String="Book"
  imageWidth: number = 200;
  imageMargin: number = 2;
  imageHeight:number=200
  
  Books=
    {
      title:'',
      author:'',
      genre:'',
      imageUrl:''
    }
  constructor(private booksService:BooksService) { }

  ngOnInit(): void {
    let title =localStorage.getItem("title");
    this.booksService.getSinglebook(title).subscribe((data)=>{
      this.Books=JSON.parse(JSON.stringify(data));
    })
  }
}
