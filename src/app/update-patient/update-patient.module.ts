import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePatientRoutingModule } from './update-patient-routing.module';
import { UpdatePatientComponent } from './update-patient.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdatePatientComponent
  ],
  imports: [
    CommonModule,
    UpdatePatientRoutingModule,
    FormsModule
  ]
})
export class UpdatePatientModule { }
