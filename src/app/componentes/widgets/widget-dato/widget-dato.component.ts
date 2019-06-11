import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { windowToggle } from 'rxjs/operators';

@Component({
  selector: 'app-widget-dato',
  templateUrl: './widget-dato.component.html',
  styleUrls: ['./widget-dato.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WidgetDatoComponent implements OnInit {

  @Input()
  public widgets: Lista[];

  public itemsModal: ListaItem[];
  public tituloModal: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.itemsModal = this.widgets[0].listaItems;
    this.tituloModal = this.widgets[0].Tema_Descripcion;
  }

  showWidgetDatoInModal(index: number, content) {
    this.itemsModal = this.widgets[index].listaItems;
    this.tituloModal = this.widgets[index].Tema_Descripcion;
    this.modalService.open(content, { size: 'lg', windowClass: 'animated fadeIn' });
  }
}
