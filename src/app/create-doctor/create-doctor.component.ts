import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent {

  cities = ['Lahore', 'Karachi', 'Islamabad']

  constructor(private _fb: FormBuilder) { }

  registrationForm = this._fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    cnic: ['', Validators.required],
    address: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    dob: ['', Validators.required],
    city: ['', Validators.required],
    specialization: ['', Validators.required],
    infoProvided: ['', Validators.required],
    workExperience: ['', Validators.required]
  })

  // registrationForm = new FormGroup({
  // firstName: new FormControl(''),
  // lastName: new FormControl(''),
  // username: new FormControl(''),
  // password: new FormControl(''),
  // confirmPassword: new FormControl(''),
  // cnic: new FormControl(''),
  // address: new FormControl(''),
  // phoneNumber: new FormControl(''),
  // dob: new FormControl(''),
  // city: new FormControl(''),
  // specialization: new FormControl(''),
  // infoProvided: new FormControl(''),
  // workExperience: new FormControl('')

  // });



}
