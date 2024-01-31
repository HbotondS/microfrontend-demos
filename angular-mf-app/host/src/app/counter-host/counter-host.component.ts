import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-counter-host',
  standalone: true,
  imports: [],
  template: '',
})
export class CounterHostComponent implements OnInit {
  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    // fixme: this is not working
    const { CounterComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      remoteName: 'counter',
      exposedModule: './CounterComponent',
    });
    const componentRef = this.vcref.createComponent(
      // this.cfr.resolveComponentFactory(CounterComponent)
      CounterComponent
    );
  }
}
