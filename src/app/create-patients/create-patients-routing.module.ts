import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientsComponent } from './create-patients.component';

const routes: Routes = [{ path: '', component: CreatePatientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePatientsRoutingModule { }
