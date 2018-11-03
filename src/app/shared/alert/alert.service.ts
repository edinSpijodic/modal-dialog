import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({providedIn: 'root'})
export class AlertService {

    constructor(
        public toaster: ToastrService) {

    }

    success(title) {
    this.toaster.success(title);
    }
    warning(title) {
    this.toaster.warning(title);
    }
    info(title) {
    this.toaster.info(title);
    }
    error(title) {
    this.toaster.error(title);
    }
}
