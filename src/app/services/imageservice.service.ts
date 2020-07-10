import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export class ApiResponse {

  status: number;
  message: string;
  result: any;
}

export class  ImageModel{
  userId :number;
  name: string;
  type: string;
  picByte: any;
}

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {
  constructor(private httpClient: HttpClient) { }
  picByte: any;
  upload(uploadImageData,userId) :Observable<ApiResponse>{
    //const params = request;
    //alert(postMsg.msg);
    return this.httpClient.post<ApiResponse>('http://dev.wicore.in:8080/cmsapi/upload/user/'+userId, uploadImageData)
    
  }
  getImage(userId) : Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'image/jpg',
      'Accept': 'image/webp,*/*',
    });
    this.picByte = this.httpClient.get<any>('http://dev.wicore.in:8080/cmsapi/upload/getImage/' + userId,{headers: headers, responseType: 'blob' as 'json' });
    alert(this.picByte);
    return this.picByte;
  }
} 
