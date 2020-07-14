import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class MytoasterService {
  options: IndividualConfig;
  constructor( private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
    this.options.positionClass = 'toast-top-center';
   }
   showToast(title, message, type) {
    this.toastr.show(message, title, this.options, 'toast-' + type);
}
}
