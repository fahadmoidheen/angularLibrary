import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  item={
    title:'',
    author:'',
    genre:'',
    image:''
  }

  constructor(private http:HttpClient) { }

  newBook(item:any){
    return this.http.post("http://localhost:7777/addbook",{"book":item})
    .subscribe(data=>{console.log(data)})
  }
  getBook(id:any){
    return this.http.get("http://localhost:7777/books/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:7777/books");
  }

  getSinglebook(id:any){
    return this.http.get("http://localhost:7777/books/singlebook/"+id)
  }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:7777/removebook/"+id)

  }
  updateBook(book:any)
  {
    console.log('book update')
    return this.http.put("http://localhost:7777/bookupdate",book)
    .subscribe(data =>{console.log(data)})
  }
}

