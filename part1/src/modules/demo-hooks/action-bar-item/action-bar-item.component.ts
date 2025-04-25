import { Component, OnInit } from '@angular/core';
import { AlertService, CoreModule } from '@c8y/ngx-components';
import { ContextDashboardModule } from '@c8y/ngx-components/context-dashboard';

@Component({
  selector: 'demo-action-bar-item-component',
  template: `<c8y-action-bar-item [placement]="'right'"
    ><button class="btn btn-link" (click)="onActionBarItemClicked()">
      <i [c8yIcon]="'add'"></i><span class="m-l-4">Demo Action Bar Item</span>
    </button>
  </c8y-action-bar-item>`,
  standalone: true,
  imports: [CoreModule],
})
export class DemoActionBarItemComponent implements OnInit {
  constructor(private alertService: AlertService) {}

  ngOnInit() {}

  onActionBarItemClicked() {
    this.alertService.success('Demo Action Bar Item Clicked');
  }
}
