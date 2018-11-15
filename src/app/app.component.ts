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


}
