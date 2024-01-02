import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddtaskComponent } from './addtask/addtask.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatDialogModule} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CharttaskComponent } from './charttask/charttask.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    TasklistComponent,
    CharttaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,MatButtonModule,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,MatDialogModule,
    MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,NgApexchartsModule,MatTabsModule,MatSnackBarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
