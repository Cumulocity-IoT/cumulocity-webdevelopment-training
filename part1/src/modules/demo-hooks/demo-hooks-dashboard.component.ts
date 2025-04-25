import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-hooks-dashboard-component',
  template: `<c8y-title>Demo Hooks Dashboard Component</c8y-title
    ><c8y-context-dashboard
      name="demo-hooks-dashboard"
      [canDelete]="false"
    ></c8y-context-dashboard>`,
})
export class DemoHooksDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
