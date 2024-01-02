import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../taskservice.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
 taskForm!: FormGroup;
 horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private fb: FormBuilder, private router:Router, private taskService: TaskService,private datePipe: DatePipe,private snackBar:MatSnackBar) {
    
  }
 
  ngOnInit(): void {
  this.taskAdd();
  }
taskAdd(){
  this.taskForm = this.fb.group({
    taskName: ['', Validators.required],
    description: ['', Validators.required],
    dueDate: ['', Validators.required]
  });
}
  onSubmit() {
    if (this.taskForm.valid) {
      const formData = this.taskForm.value;
      formData.dueDate = this.datePipe.transform(formData.dueDate, 'MM-dd-yyyy');
      this.taskService.addTask(formData).subscribe(
        (response) => {
          console.log('task posted successfully:', response);
          this.showSnackBar('Task Added successful', 'green-snackbar',);
          this.taskForm.reset();
          this.router.navigate(['task'],);
        },
        (error) => {
          console.error('Error posting task:', error);
        }
      );
    }
    else if(!this.taskForm.valid){
      this.showSnackBar('Invalid Form, Fill All Details', 'green-snackbar');
    }
  }
  showSnackBar(message: string, panelClass: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: [panelClass],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
}
