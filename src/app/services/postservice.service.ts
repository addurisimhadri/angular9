import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class PostMsg{
  constructor(
    public id:string,
    public msg:string,
    public userId:string,
    public likeCount:string,
    public createdAt:any 
  ) {}
   
}
export class ApiResponse {

  status: number;
  message: number;
  result: any;
}

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private httpClient:HttpClient) { }

  getPostMsgs(request): Observable<ApiResponse> {     
    const params = request;
    return this.httpClient.get<ApiResponse>("http://dev.wicore.in:8080/cmsapi/post/getAll",{params});
  }
  createPostMsg(postMsg) :Observable<ApiResponse>{
    //const params = request;
    //alert(postMsg.msg);
    return this.httpClient.post<ApiResponse>("http://dev.wicore.in:8080/cmsapi/post/add", postMsg);
  }
}
