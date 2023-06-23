import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) },

  { path: 'doctors', loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule) },

  { path: 'patients/create', loadChildren: () => import('./create-patients/create-patients.module').then(m => m.CreatePatientsModule) },

  { path: 'doctors/create', loadChildren: () => import('./create-doctor/create-doctor.module').then(m => m.CreateDoctorModule) },

  { path: 'patients/view', loadChildren: () => import('./view-single-patient/view-single-patient.module').then(m => m.ViewSinglePatientModule) },

  { path: 'patients/update/:id', loadChildren: () => import('./update-patient/update-patient.module').then(m => m.UpdatePatientModule) },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
