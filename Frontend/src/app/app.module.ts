import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BooksService } from './books.service';
import { AuthorService } from './author.service';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    AuthorsComponent,
    AddbookComponent,
    AddauthorComponent,
    LoginComponent,
    SignupComponent,
    UpdateBookComponent,
    UpdateAuthorComponent,
    SinglebookComponent,
    SingleauthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BooksService,AuthorService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
