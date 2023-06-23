import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSinglePatientRoutingModule } from './view-single-patient-routing.module';
import { ViewSinglePatientComponent } from './view-single-patient.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewSinglePatientComponent
  ],
  imports: [
    CommonModule,
    ViewSinglePatientRoutingModule,
    FormsModule
  ]
})
export class ViewSinglePatientModule { }
