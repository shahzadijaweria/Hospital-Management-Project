import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { createPatient } from '../create-patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-single-patient',
  templateUrl: './view-single-patient.component.html',
  styleUrls: ['./view-single-patient.component.css']
})
export class ViewSinglePatientComponent implements OnInit {

  cities = ['Lahore', 'Karachi', 'Islamabad']

  submitted = false;

  hasError = false;

  serverErrorMsg = '';

  id: String = '';

  isUpdate = false

  // patientModel!: createPatient;
  patientModel = new createPatient("", "", "", "", "", "", "", "", "", true, "")



  // activated route is used to set query param OR url params in url on front end
  // this.activatedRoute.queryParams.subscribe ..... (for query params)
  // this.activatedRoute.params.subscribe ..... (for url params)

  constructor(private _enrollmentService: EnrollmentService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params?.['id'];
    });
    // this.initializeForm();
  }

  ngOnInit() {
    this.getPatientById(this.id);
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

  updatePatient(id: any) {
    // console.log("id in view patients: ", id)
    this.router.navigate([`/patients/update/${id}`]);

  }

}
