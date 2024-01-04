import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
    
  }

  private getTasks() {
    this.taskService.getTaskList().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }
 
 
  }
   


