import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {


  task:Task=new Task();

  constructor(){}

  ngOnInit():void
  {}

  onSubmit() {
     
    console.log(this.task);
    }

}
