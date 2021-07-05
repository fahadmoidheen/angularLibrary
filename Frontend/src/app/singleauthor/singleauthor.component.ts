import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-singleauthor',
  templateUrl: './singleauthor.component.html',
  styleUrls: ['./singleauthor.component.css']
})
export class SingleauthorComponent implements OnInit {
  title:String="Author"
  imageWidth: number = 200;
  imageMargin: number = 2;
  imageHeight:number=200;

  authors=
    {
      author:'',
      language:'',
      genre:'',
      imageUrl:''
    }
  
  constructor( private authorService:AuthorService) { }

  ngOnInit(): void {
    let author =localStorage.getItem("author");
    this.authorService.getSingleauthor(author).subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }

}
