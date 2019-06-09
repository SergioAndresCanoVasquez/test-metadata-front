import { Servicio } from './servicio/servicio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private servicio: Servicio) {
    this.servicio.getData().subscribe(response => {
      localStorage.setItem('data',JSON.stringify(response));
    })
  }

  ngOnInit() { }
}
