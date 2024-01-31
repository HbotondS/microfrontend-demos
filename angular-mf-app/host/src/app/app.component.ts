import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterHostComponent } from "./counter-host/counter-host.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
      <app-counter-host></app-counter-host>
    `,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterHostComponent]
})
export class AppComponent {
  title = 'host';
}
