import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver1', content: 'Just a test 1' },
    { type: 'server', name: 'Testserver2', content: 'Just a test 2' }
  ];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // Reagisce al cambiamento di una proprietà. In questo caso stampo a schermo anche
  // il valore precedente e quello successivo
  onChangeFirst(){
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
}
