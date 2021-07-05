import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  item={
    author:'',
    language:'',
    genre:'',
    image:''
  }
  constructor(private http:HttpClient) { }

  getAuthors(){
    return this.http.get("http://localhost:7777/authors");
  }
  getAuthor(id:any){
    return this.http.get("http://localhost:7777/author/"+id);
  }
  getSingleauthor(id:any){
    return this.http.get("http://localhost:7777/authors/singleauthor/"+id)
  }

  
  newAuthor(item:any){
    return this.http.post("http://localhost:7777/addauthor",{"author":item})
    .subscribe(data=>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:7777/removeauthor/"+id)

  }
  updateAuthor(author:any)
  {
    console.log('author update')
    return this.http.put("http://localhost:7777/authorupdate",author)
    .subscribe(data =>{console.log(data)})
  }
  
 
}
