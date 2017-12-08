import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Post } from '../post.model';

  @Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
  })
export class AddPostComponent implements OnInit {

  @Input() newPost:Post = new Post();
  @Output() addPostEvent = new EventEmitter<Post>();

  onAddPost() {
    this.addPostEvent.emit(this.newPost);
    //this.newPost = {title: this.newPostTitle, description: this.newPostDescription}

    console.log(Post);
  }

  constructor() { }

  ngOnInit() {
  }

}