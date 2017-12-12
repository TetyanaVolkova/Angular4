import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  disabled_btn = [false, false, false];
  @Input() postList: Post[] = [
  ];
  onDeletePost(post, index) {
    this.postList.splice(index, 1);
  }
  onEditPost(post, i) {
    this.disabled_btn[i] = !this.disabled_btn[i];
  }
  onSavePost(post, i) {
    this.disabled_btn[i] = !this.disabled_btn[i];
  }
  
  constructor() { }

  ngOnInit() {
  }

}
