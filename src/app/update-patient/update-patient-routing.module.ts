import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePatientComponent } from './update-patient.component';

const routes: Routes = [{ path: '', component: UpdatePatientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePatientRoutingModule { }
