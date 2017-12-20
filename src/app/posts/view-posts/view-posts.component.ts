import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  @Input() postList: Post[] = [
  ];
  editIndex:number = null;

  onDeletePost(index) {
    this.postList.splice(index, 1);
  }
  onEditPost(i) {
    this.editIndex = i;
  }
 
  onSavePost(i) {
    this.editIndex=null;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
