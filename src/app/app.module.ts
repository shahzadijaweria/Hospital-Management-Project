import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatInputModule } from '@angular/material/input';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatSortModule } from '@angular/material/sort';

import { CreatePatientsComponent } from './create-patients/create-patients.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CreatePatientsComponent,
    CreateDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    FormsModule,
    // MatTableModule,
    // MatSortModule,
    // MatProgressSpinnerModule,
    // MatInputModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  // exports: [MatTableModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
