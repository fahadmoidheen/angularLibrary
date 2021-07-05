import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  authorItem={
    author:'',
    language:'',
    genre:'',
    imageUrl:''
  }

  constructor(private authorServive:AuthorService,private router:Router) { }
  title:String="Update Author"

  ngOnInit(): void {
    let author = localStorage.getItem("updateauthor");
    this.authorServive.getAuthor(author).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  updateAuthor()
  {    
    this.authorServive.updateAuthor(this.authorItem);   
    alert("Author updated");
    this.router.navigate(['authors']);
  }
}


