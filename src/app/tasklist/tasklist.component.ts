import { Component, OnInit,TemplateRef} from '@angular/core';
import { TaskService } from '../taskservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { TaskService } from '../taskservice.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  data:any;
  editMode: boolean = false;
  editForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private taskService: TaskService, private router:Router,private fb:FormBuilder,private matDialog:MatDialog,private datePipe: DatePipe,private snackBar:MatSnackBar){

  }
  ngOnInit(): void {
    this.allTasks()
    this.createEditForm();
    const successMessage = localStorage.getItem('successMessage');
    if (successMessage) {
      this.showSnackBar(successMessage, 'green-snackbar');
      localStorage.removeItem('successMessage'); 
    }
  }
 
  
  allTasks()
  {
    this.taskService.getTasks().subscribe((response:any) =>{
      this.data = response;
      console.log(response)
    })

  }
  createEditForm() {
    this.editForm = this.fb.group({
      id: [''],
      taskName: [''],
      description:[''],
      dueDate:['']
    });
  }

  editTask(task: any, templateRef: TemplateRef<any>) {
    this.editMode = true;
    const dueDate = task.dueDate ? new Date(task.dueDate) : null;
    this.editForm.patchValue({
      id: task.id,
      taskName: task.taskName,
      description: task.description,
      dueDate: dueDate
    });
    this.matDialog.open(templateRef);
  }

  updateTask() {
    if (this.editForm.valid) {
      const editedTask = this.editForm.value;
      editedTask.dueDate = this.datePipe.transform(editedTask.dueDate, 'MM-dd-yyyy');
      this.taskService.updateTask(editedTask).subscribe(() => {
        console.log('Task updated successfully.');
        this.editForm.reset();
        this.editMode = false;
        localStorage.setItem('successMessage', 'Task Updated successful');
        window.location.reload();
        
      }, error => {
        console.error('Error updating task:', error);
      });
    } else {
      console.error('Invalid form submission. Please check the form.');
      this.showSnackBar('Invalid form submission. Please check the form.', 'green-snackbar');
    }
  }
  deleteTask(taskId: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(taskId).subscribe(() => {
        console.log('Task deleted successfully.');
        this.showSnackBar('Task Deleted successful', 'green-snackbar');
        this.allTasks(); // Refresh the task list
      }, error => {
        console.error('Error deleting task:', error);
      });
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
