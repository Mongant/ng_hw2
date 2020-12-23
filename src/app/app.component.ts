import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ng-hw2';

  public consoleEvent(index: number): void{
    console.log("Remove element by indrx:" + index);
  }
}
