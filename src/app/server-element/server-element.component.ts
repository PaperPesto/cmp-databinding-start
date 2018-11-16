import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // Sto esponendo questa proprietà ai parenti di questo component
  // La bindo con la parentesi quadra e gli posso sare un alias da richiamare
  // dentro la quadra. Il binding delle proprietà dei component funziona dentro il component dell'html
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
