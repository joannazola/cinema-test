import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {

  condition:any = localStorage.getItem('pass');
  
  constructor() { }

  ngOnInit(): void {
  }

}
