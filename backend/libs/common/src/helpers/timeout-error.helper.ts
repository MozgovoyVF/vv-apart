import {HttpException, HttpStatus} from "@nestjs/common";
import {Observable, TimeoutError, catchError, timeout} from "rxjs";

export function handleTimeoutAndErrors<T = unknown>() {
  return (sourse$: Observable<T>) =>
    sourse$.pipe(
      timeout(5000),
      catchError(err => {
        if (err instanceof TimeoutError) {
          throw new HttpException(err.message, HttpStatus.REQUEST_TIMEOUT);
        }
        throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
      }),
    );
}
