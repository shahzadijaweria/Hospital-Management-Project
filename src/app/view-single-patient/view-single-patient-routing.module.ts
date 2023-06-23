import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSinglePatientComponent } from './view-single-patient.component';


const routes: Routes = [{ path: '', component: ViewSinglePatientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSinglePatientRoutingModule { }
