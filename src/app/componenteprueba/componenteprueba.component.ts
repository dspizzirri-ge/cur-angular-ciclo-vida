import {
  Component,
  OnInit, OnChanges, DoCheck, OnDestroy, Input,
  AfterContentInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import { ComponentepruebahijoComponent } from '../componentepruebahijo/componentepruebahijo.component';

@Component({
  selector: 'app-componenteprueba',
  templateUrl: './componenteprueba.component.html',
  styleUrls: ['./componenteprueba.component.css']
})
export class ComponentepruebaComponent
  implements OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit {

  eventos: Array<String>;

  @Input("atributoHTML") atributo: String
  @ViewChild(ComponentepruebahijoComponent, { static: false }) hijo: ComponentepruebahijoComponent;

  constructor() {
    this.eventos = new Array();
    this.agregarEvento("Constructor");
    console.log("Constructor: Se crea una instancia de la clase");
  }

  ngOnInit() {
    this.agregarEvento("OnInit");
    console.log("OnInit: Se carga el componente");
  }

  ngOnChanges(cambios: SimpleChanges) {
    this.agregarEvento("OnChanges");
    console.log("OnChanges: Detecta cambio en los @Input");
    console.log(cambios);
  }

  ngDoCheck() {
    this.agregarEvento("DoCheck");
    console.log("DoCheck: Detecta cambios en el DOM");
  }

  ngAfterContentInit() {
    this.agregarEvento("AfterContentInit");
    console.log("AfterContentInit: Se setea el componente hijo despues de que la vista se inicializo");
  }

  ngAfterViewChecked() {
    this.agregarEvento("AfterViewChecked");
    console.log("AfterViewChecked: Se actualiza el componente hijo despues de que la vista fue chequeda");
  }

  ngOnDestroy() {
    this.agregarEvento("OnDestroy");
    console.log("OnDestroy: Se destruye el componente");
  }

  agregarEvento(evento: String): void {
    this.eventos.push(evento);
  }

}
