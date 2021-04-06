import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'draggable';
  public constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup("d", {
      direction:'horizontal',
      moves: (el, container, handle) => {
        return handle.classList.contains('handle');
      }
    });
  
  }
}
