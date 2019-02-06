import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks
  sTitle:string
  constructor() { 
    this.sTitle = ""
    this.tasks = [
      {
        id : 1,
        title : "Feed The Dogs",
        done : false,
        priority : 5
    },
    {
      id : 2,
      title : "Go To School",
      done : true,
      priority : 4
    },
    {
      id : 3,
      title : "Take Out The Thrash Can",
      done : false,
      priority : 2
    }
    ]
  }
  ngOnInit() {
  }
  on_aTask(){
    if(this.sTitle.length == 0)return
    else{  
      this.tasks.push({id: this.tasks.length+2, title: this.sTitle, done:false, priority : 0})
      this.sTitle = "";
    }
  }
  on_dTask(id:number){
    this.tasks.splice(id-1, 1)
  }
}
