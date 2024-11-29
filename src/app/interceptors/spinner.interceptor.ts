import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { map, catchError, throwError, finalize } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(NgxSpinnerService);
  const toastr = inject(ToastrService);
  return next(req).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        toastr.success('Request successful');
      }
      return event;
    }),
    catchError((error: HttpErrorResponse) => {
      toastr.error(`Request failed: ${error.message}`);
      return throwError(() => new Error('Error'));
    }),
    finalize(() => {
      setTimeout(() => {
        spinner.hide();
      }, 1000);
    })
  );
};
