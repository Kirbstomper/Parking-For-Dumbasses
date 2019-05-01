import { Component, OnInit } from '@angular/core';
import {Job} from '../job';
import {MOCK_JOBS} from '../mock-jobs'
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})

export class FrameComponent implements OnInit {
  jobs = MOCK_JOBS;
  index = Math.floor(Math.random() * MOCK_JOBS.length)
  viewing = this.jobs[this.index];
  constructor() { }
  
  ngOnInit() {
    
  }

  onClick(){
    this.index = Math.floor(Math.random() * MOCK_JOBS.length)
    this.viewing = this.jobs[this.index];
  }

  
  

}
