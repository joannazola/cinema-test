import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import * as io from 'socket.io-client';
var socket = io.connect('http://localhost:3100');

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  preorders:any;

  constructor(

    private service: MoviesService

  ) {}
  

  public ngOnInit(): void {

    this.service.getPreorders().subscribe(response =>{this.preorders = response})
    console.log(this.preorders.movie)


  }


}
