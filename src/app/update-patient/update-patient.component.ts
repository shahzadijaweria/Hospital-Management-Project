import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { createPatient } from '../create-patient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  cities = ['Lahore', 'Karachi', 'Islamabad']

  submitted = false;

  hasError = false;

  serverErrorMsg = '';

  id: String = '';

  isUpdate = true

  // patientModel!: createPatient;
  patientModel = new createPatient("", "", "", "", "", "", "", "", "", true, "")



  // activated route is used to set query param OR url params in url on front end
  // this.activatedRoute.queryParams.subscribe ..... (for query params)
  // this.activatedRoute.params.subscribe ..... (for url params)

  constructor(private _enrollmentService: EnrollmentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params?.['id'];
    });
    // this.initializeForm();
  }

  ngOnInit() {
    this.getPatientById(this.id);
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.updatePatient(this.id, this.patientModel)       // this component is subscribed to service
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

  // To Single Employee Details By ID
  getPatientById(id: any) {
    this._enrollmentService.fetchPatientById(id).subscribe(res => {
      this.patientModel = res.data;
    });
  }

  // updatePatient(id: any) {
  //   this.isUpdate = true
  //   this.getPatientById(id)
  //   this._enrollmentService.updatePatient(id, this.patientModel).subscribe({
  //     next: (v) => console.log(v),
  //     error: (e) => this.serverErrorMsg = e.statusText,
  //     complete: () => console.info('complete'),
  //   })
  // }


}
