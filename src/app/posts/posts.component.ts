import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [
    new Post('Test', 'Test for Post'),
    new Post('Test #2', 'Description for test #2')
  ];

  mode: string = "create";

  constructor() { }
  ngOnInit() {
  }

  addPostToArray(newPost) {
    //this.posts.push(new Post(newPost.title, newPost.description));
    this.posts.push(newPost);
  }

}
