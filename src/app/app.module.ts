import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { ViewPostsComponent } from './posts/view-posts/view-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    AddPostComponent,
    ViewPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
