import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseURL = "http://localhost:8080";
  task: Task = new Task();

  // constructor(private httpClient: HttpClient) { }

  // getTaskList(): Observable<Task[]> {
  //   return this.httpClient.get<Task[]>(`${this.baseURL}`);
  // }

  // createTask(task: Task): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`, task);
  // }
  constructor(private taskService: TaskService,
    private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saveTask(){
    this.taskService.createTask(this.task).subscribe( data =>{
      console.log(data);
      this.goToTaskList();
    },
    error => console.log(error));
  }
  //  getTaskList(): Observable<Task[]> {
  //   return this.httpClient.get<Task[]>(`${this.baseURL}`);
  // }

  //  createTask(task: Task): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`, task);
  // }
  goToTaskList(){
    this.router.navigate(['/tasks']);
  }
  
  onSubmit(){
    console.log(this.task);
    this.saveTask();
  }

  getTaskList(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL}`);
  }

  createTask(task: Task): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, task);
  }

  getTaskById(id: number): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseURL}/${id}`);
  }

  updateTask(id: number, task: Task): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, task);
  }

  deleteTask(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  
  }




