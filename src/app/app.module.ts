import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { BooksListComponent } from './components/book-cart/books-list/books-list.component';
import { SearchFilterComponent } from './components/book-cart/search-filter/search-filter.component';
import { BookItemComponent } from './components/book-cart/book-list/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    BookCartComponent,
    BooksListComponent,
    SearchFilterComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
