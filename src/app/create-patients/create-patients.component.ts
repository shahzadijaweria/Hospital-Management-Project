import { Component } from '@angular/core';
import { createPatient } from '../create-patient';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.css']
})
export class CreatePatientsComponent {
  cities = ['Lahore', 'Karachi', 'Islamabad']

  patientModel = new createPatient("", "shahzadi", "jaweria", "34560-0985765-1", "26-09-2000", "modelTown", "0981-9999999", "cough", "no", true, "Select City")

  submitted = false;

  hasError = true;

  serverErrorMsg = ''

  constructor(private _enrollmentService: EnrollmentService) { }

  onSubmit() {
    this.submitted = true;
    console.log(this.patientModel)
    this._enrollmentService.enroll(this.patientModel)       // this component is subscribed to service
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => this.serverErrorMsg = e.statusText,
        complete: () => console.info('complete'),
      })
    // .subscribe(data => console.log('success!', data),
    //   error => console.log('errorr!', error)
    // )

  }

  cityValidation(value: any) {
    value === 'Select City' ? this.hasError = true : this.hasError = false

  }
}
