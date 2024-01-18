import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div>{{ counter }}</div>
    <button class="rounded-full bg-green-500 text-white p-2" (click)="increaseCounter()">Add one </button>
  `,
})
export class CounterComponent {
  counter = 0;

  increaseCounter(): void {
    this.counter++;
  }
}
