import { Component, Input, OnInit } from '@angular/core';
import { IManagedObject, InventoryService } from '@c8y/client';

@Component({
  selector: 'demo-hooks-component',
  template: ` <h1>Demo Hooks Component</h1>
    @if (deviceManagementObject) {
    <strong>{{ deviceManagementObject['name'] }}</strong>
    <br />
    <strong>{{ deviceManagementObject['type'] }}</strong>
    <br />
    <strong>{{ deviceManagementObject.lastUpdated | c8yDate }}</strong>
    }`,
})
export class DemoHooksComponent implements OnInit {
  @Input() config!: { device: { id: string } };

  deviceManagementObject!: IManagedObject;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.inventoryService
      .detail(this.config.device.id)
      .then((response) => (this.deviceManagementObject = response.data));
  }
}



