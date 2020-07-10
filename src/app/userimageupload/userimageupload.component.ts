import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from '../services/imageservice.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-userimageupload',
  templateUrl: './userimageupload.component.html',
  styleUrls: ['./userimageupload.component.css']
})
export class UserimageuploadComponent implements OnInit {

  selectedFile: File;
	retrievedImage: any;
	base64Data: any;
	retrieveResonse: any;
	message: string;
	imageName: any;
  constructor(private router: Router,private imageserviceService:ImageserviceService) { }
  ngOnInit(): void {
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    var userId=sessionStorage.getItem('userId');
    console.log(this.selectedFile);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.imageserviceService.upload(uploadImageData,userId)
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = response.message;
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
  //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
      var userId=sessionStorage.getItem('userId');
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.imageserviceService.getImage(userId)
      .subscribe(
        res => {
          alert(res.picByte); 
          //this.retrieveResonse = res;
          //this.base64Data = this.retrieveResonse.picByte;
          this.base64Data = res;
          var urlCreator = window.URL;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.retrievedImage.bypassSecurityTrustUrl(urlCreator.createObjectURL(res));
        }, error => {
          alert(console.error());
          alert(error.status+"=========="+error.message+"=========="+error.data);
        }
        
        
      ); 
  }

}
