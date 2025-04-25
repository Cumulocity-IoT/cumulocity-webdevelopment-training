import { Component, OnInit } from '@angular/core';
import { AlertService } from '@c8y/ngx-components';

@Component({
  selector: 'demo-action-bar-item-component',
  template: `<c8y-action-bar-item [placement]="'right'"
    ><button class="btn btn-link" (click)="onActionBarItemClicked()">
      <i [c8yIcon]="'add'"></i><span class="m-l-4">Demo Action Bar Item</span>
    </button>
  </c8y-action-bar-item>`,
})
export class DemoActionBarItemComponent implements OnInit {
  constructor(private alertService: AlertService) {}

  ngOnInit() {}

  onActionBarItemClicked() {
    this.alertService.success('Demo Action Bar Item Clicked');
  }
}
