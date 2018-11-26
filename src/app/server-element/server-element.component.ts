import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation serve per rendere globale il css di questo component
  // Altrimenti il css viene applicato soltanto al component a cui appartiene
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

  // Sto esponendo questa proprietà ai parenti di questo component
  // La bindo con la parentesi quadra e gli posso sare un alias da richiamare
  // dentro la quadra. Il binding delle proprietà dei component funziona dentro il component dell'html
  // ----------------------------------------------------------
  // ...parent che usa il figlio
  // Come fare per far comunicare più component:
  // 1 - Con questo sistema degli event emittere e dei bindng delle proprietà, ma vale
  // solo per un solo livello di profondità nella comunicazione (padre -> filgio oppure figlio -> padre)
  // 2 - Nel caso si debba far comunicare tra di loto più component sullo stesso livello,
  // invece di fare figlio1 -> padre -> figlio2 si utilizzano i services
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
