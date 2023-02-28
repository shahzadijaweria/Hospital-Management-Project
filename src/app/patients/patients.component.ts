import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  serverErrorMsg = ''

  data = [];

  public dataSourceArray: any = new MatTableDataSource([]);

  displayColumn: string[] = ['_id', 'First_Name', 'Last_Name', 'Cnic', 'Date_of_Birth', 'Phone_Number', 'Address', 'City', 'Disease', 'isVisitedBofore', 'actions']


  constructor(private _enrollmentService: EnrollmentService, private router: Router) { }

  ngOnInit(): void {
    this.viewPatients()
  }

  viewPatients() {
    this._enrollmentService.fetchAll()       // this component is subscribed to service
      .subscribe((data) => {
        console.log('success!', data);
        this.data = data;
        this.dataSourceArray = new MatTableDataSource(data);
        this.dataSourceArray = this.dataSourceArray._data.value.data;
        // console.log("oooooooooo: ", this.dataSourceArray._data.value.data)

      })
    // .subscribe(data => console.log('success!', data),
    //   error => console.log('errorr!', error)
    // )

    // .subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => this.serverErrorMsg = e.statusText,
    //   complete: () => console.info('complete'),
    // })
    // .subscribe(data => console.log('success!', data),
    //   error => console.log('errorr!', error)
    // )

  }

  // To Edit patient
  editPatient(id: any) {
    // console.log("id in view patients: ", id)
    // this.router.navigate([`/patients/update/${id}`]);    // e.g. of url params
    this.router.navigate([`/patients/view`], { queryParams: { id: `${id}` } });

  }

  //delete row function
  delRecord(id: any) {
    this.router.navigate([`/patients/delete/${id}`]);  // this route haven't created yet

    // this._enrollmentService.deletePatient(id)       // this component is subscribed to service
    //   .subscribe({
    //     next: (v) => console.log(v),
    //     error: (e) => this.serverErrorMsg = e.statusText,
    //     complete: () => console.info('complete'),
    //   })

    // this.dataSourceArray.data.splice(i, 1);
    // this.dataSourceArray._updateChangeSubscription(); // <-- Refresh the datasource

  }

}
