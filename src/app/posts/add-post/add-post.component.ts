import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Post } from '../post.model';

  @Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
  })
export class AddPostComponent implements OnInit {

 @Input() mode: string;

  @Input() newPost:Post = new Post();
  @Output() addPostEvent = new EventEmitter<Post>();


  

  onAddPost() {
    this.addPostEvent.emit(this.newPost);
    this.newPost = new Post();
    //this.newPost.title = '';
    //this.newPost.description = '';
    //this.newPost = {title: this.newPostTitle, description: this.newPostDescription}
    
  }

  onEditPost(){
    //TODO: 
    //create event for editing - pass 
    //add Id property to Post object, 
    //when new post is additing to postsList, you need to assing id to index value
    
  }

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.mode);
  }

}