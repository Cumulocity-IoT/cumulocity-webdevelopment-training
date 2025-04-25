import { Component, OnInit } from '@angular/core';
import { CoreModule } from '@c8y/ngx-components';
import { ContextDashboardModule } from '@c8y/ngx-components/context-dashboard';

@Component({
  selector: 'demo-hooks-dashboard-component',
  template: `<c8y-title>Demo Hooks Dashboard Component</c8y-title
    ><c8y-context-dashboard
      name="demo-hooks-dashboard"
      [canDelete]="false"
    ></c8y-context-dashboard>`,
  standalone: true,
  imports: [CoreModule, ContextDashboardModule],
})
export class DemoHooksDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
