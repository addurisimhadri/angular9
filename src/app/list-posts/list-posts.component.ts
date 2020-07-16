import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { PostMsg } from '../services/postservice.service';
import {LikedService}  from '../services/liked.service'
import {MytoasterService } from '../toast/mytoaster.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  userID :any;
  @Output() getPostMsg: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private likedService :LikedService,private toastr: MytoasterService) { }
  @Input() postMsg: PostMsg; 
  ngOnInit(): void {
    var userId  =sessionStorage.getItem('userId');
    this.userID=userId;
  }
  liked(postMsg: PostMsg) :void {
    this.likedService.likes(postMsg).subscribe( data => {
      this.postMsg=data.result;
      this.toastr.showToast('like', data.message, 'success');   
      
    })
  }; 
  delete(postMsg: PostMsg) :void {    
    this.likedService.delete(postMsg).subscribe( data => {
      //this.postMsg=data.result;
      this.toastr.showToast('delte', data.message, 'success'); 
      this.getPostMsg.emit(postMsg);
      this.router.navigate(['posts']);
    }, error => {
      alert(error.message);
      ;
    } 
    
    )
  }; 
}
