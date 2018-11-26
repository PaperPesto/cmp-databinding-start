import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log('onAddServer: valore letto con local reference:', nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log('onAddBlueprint: valore letto con local reference:', nameInput.value);
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

}
