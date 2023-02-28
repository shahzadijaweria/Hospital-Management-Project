import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { createPatient } from './create-patient';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = 'http://localhost:3001/api/patients'

  constructor(private _http: HttpClient) { }

  enroll(patient: createPatient) {
    return this._http.post<any>(this._url, patient)
      .pipe(catchError(this.errorHandler));
  }

  fetchAll() {
    return this._http.get<any>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  fetchPatientById(id: any) {
    return this._http.get<any>(`${this._url}?id=${id}`)
      .pipe(catchError(this.errorHandler));
  }

  updatePatient(id: any, body: any) {
    return this._http.patch<any>(`${this._url}/${id}`, body)
      .pipe(catchError(this.errorHandler));
  }

  deletePatient(id: any) {
    return this._http.delete<any>(`${this._url}/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
