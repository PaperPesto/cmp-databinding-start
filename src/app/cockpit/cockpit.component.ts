import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  // Qui serverContentInput viene bindato sull'elemento specifico del dom tramite il decorato ViewChild
  // Att. non modificare il DOM con questo componente
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  // Lifecycle hook. Angular supporta molti lifecicle hook.
  // Quando angular trova un nuovo component da istanziare (cioé quando trova il tag app-component nell'html)
  // entra in una sequenza di operazioni a cascata (lifecycle hook) e lo sviluppatore può entrare nella sequenza
  // 1) ngOnChanges: called after a bound input property changes (quando la proprietà riceve nuovi valori)
  // 2) ngOnInit: chiamato quando viene inizializzato il component (dopo il costruttore) e le proprietà sono pronte
  // 3) ngDoCheck: gira moltissime volte quando angular cerca di controllare se una proprietà è cambiata (tipo polling, ma angular lo fa molto efficentemente)
  // 4) ngAfterContentInit: chiamato dopo che il content chiamato da ng-content viene proiettato
  // 5) ngAfterContentCheckd: chiamato oni volta che il contenuto proiettato (projected) viene controllato per vedere se una proprietà è cambiata
  // 6) ngAfterViewInit: quando il component ha finito l'inizializzazione
  // 7) ngAfterViewCHecked: chiamato quando la vista del component (e i figli) sono state inizializzati
  // 8) ngAfterViewChecked: chiamato ogni volta che la view (e i figli) sono stato controllati
  // 9) ngOnDestroy: chiamato quando il component sta per essere ditrutto
  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log('onAddServer: valore letto con local reference:', nameInput.value);
    console.log('content:', this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log('onAddBlueprint: valore letto con local reference:', nameInput.value);
    console.log('content:', this.serverContentInput);
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
