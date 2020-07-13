import { Component, OnInit ,Input} from '@angular/core';
import { PostMsg } from '../services/postservice.service';
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  userID :any;
  constructor() { }
  @Input() postMsg: PostMsg; 
  ngOnInit(): void {
    var userId  =sessionStorage.getItem('userId');
    this.userID=userId;
  }

}
