import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:"books",component:BooksComponent},
  {path:"authors",component:AuthorsComponent},
  {path:"addbook",component:AddbookComponent},
  {path:"addauthor",component:AddauthorComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"updatebook",component:UpdateBookComponent},
  {path:"updateauthor",component:UpdateAuthorComponent},
  {path:"singlebook",component:SinglebookComponent},
  {path:"singleauthor",component:SingleauthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
