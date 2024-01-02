import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addTask(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
  updateTask(updatedTask: any): Observable<any> {
    const updateUrl = this.apiUrl + '/' + updatedTask.id;
    return this.http.put(updateUrl, updatedTask);
  }
  deleteTask(taskId: number): Observable<any> {
    const deleteUrl = this.apiUrl + '/' + taskId;
    return this.http.delete(deleteUrl);
  }
}
