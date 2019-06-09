import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {


  @Input()
  public pagina: ListaPagina;

  @Input()
  public activa: boolean;

  @Input()
  public numeroPagina: number;

  constructor() { }

  ngOnInit() {
  }

}
