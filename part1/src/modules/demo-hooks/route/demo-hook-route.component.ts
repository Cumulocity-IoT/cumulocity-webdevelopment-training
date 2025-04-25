import { Component } from '@angular/core';
import { CoreModule } from '@c8y/ngx-components';

@Component({
  selector: 'demo-hooks-route-component',
  template: `<h1>Demo Hooks Route Component</h1>
    <p>Route component for demo hooks.</p>
    <p>Check the console for more information.</p>`,
  standalone: true,
  imports: [CoreModule],
})
export class DemoHookRouteCompoment {}
