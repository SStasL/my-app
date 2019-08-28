import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message: string;
  items = ["Angular", "React", "Vue", "Bootstrap", "Node.js"];
  constructor() {
    setInterval(()=>{
    this.message = new Date().toLocaleString();
  }, 1000)
}

  ngOnInit() {
  }

}
