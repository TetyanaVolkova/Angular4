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
  
  constructor() { }

  ngOnInit() {
  }

}
