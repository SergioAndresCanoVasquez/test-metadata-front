import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gamificacion',
  templateUrl: './gamificacion.component.html',
  styleUrls: ['./gamificacion.component.scss']
})
export class GamificacionComponent implements OnInit {

  public data: Data;

  constructor() {
    this.data = JSON.parse(localStorage.getItem('data'));
  }

  ngOnInit() {
  }

}
