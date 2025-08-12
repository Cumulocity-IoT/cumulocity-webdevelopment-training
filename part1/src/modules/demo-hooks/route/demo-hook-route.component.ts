import { Component, inject } from '@angular/core';
import { AlertService, CoreModule } from '@c8y/ngx-components';

@Component({
  selector: 'demo-hooks-route-component',
  template: `<c8y-title>Demo Hooks Route Component</c8y-title>
    <c8y-action-bar-item [placement]="'right'"
      ><button
        class="btn btn-link"
        data-cy="watch-list-button"
        (click)="displayAlert()"
      >
        <i [c8yIcon]="'add'"></i><span class="m-l-4">Demo Action</span>
      </button>
    </c8y-action-bar-item>
    <h1>Demo Hooks Route Component</h1>
    <p>Route component for demo hooks.</p>
    <p>Check the console for more information.</p>`,
  standalone: true,
  imports: [CoreModule],
})
export class DemoHookRouteCompoment {
  alertService = inject(AlertService);

  displayAlert() {
    this.alertService.success('Demo Action Bar Item Clicked');
  }
}
