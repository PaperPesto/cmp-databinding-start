import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation serve per rendere globale il css di questo component
  // Altrimenti il css viene applicato soltanto al component a cui appartiene
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // Sto esponendo questa proprietà ai parenti di questo component
  // La bindo con la parentesi quadra e gli posso sare un alias da richiamare
  // dentro la quadra. Il binding delle proprietà dei component funziona dentro il component dell'html
  // ----------------------------------------------------------
  // ...parent che usa il figlio
  // Come fare per far comunicare più component:
  // 1 - Con questo sistema degli event emittere e dei bindng delle proprietà, ma vale
  // solo per un solo livello di profondità nella comunicazione (padre -> filgio oppure figlio -> padre)
  // 2 - Nel caso si debba far comunicare tra di loro più component sullo stesso livello,
  // invece di fare figlio1 -> padre -> figlio2 si utilizzano i services
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }

  // Specificare di far implementare l'interfaccia alla classe (OnInit viene implementate di default)
  // questo evento parte prima dell'onInit(). Stampa su console un oggetto al cui interno ci sono le proprietà
  // bindate dal component.ts. Per richiamare nuovamente l'evento, aggiungo un pulsante nell'html bindato sul metodo
  // onChangesFirst() di app.component.ts che ritriggherà l'onChanges()
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }
  
  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  // il content è l'html che viene proiettato dentro questo component dal cmponent padre
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  // Messo un pulsante che fa lo splice dell'array di server e trigghera questo metodo
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
