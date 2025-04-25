import { Injectable } from '@angular/core';
import {
  NavigatorNode,
  NavigatorNodeFactory,
  Permissions,
} from '@c8y/ngx-components';

@Injectable()
export class DemoHooksNavigationFactory implements NavigatorNodeFactory {
  private readonly DEMO_HOOKS_NODE = new NavigatorNode({
    label: 'Demo Hooks',
    icon: 'check',
    path: '/demo-hooks',
    priority: 100,
  });

  constructor(private permissionsService: Permissions) {}

  async get(): Promise<NavigatorNode | NavigatorNode[]> {
    if (
      !(await this.permissionsService.hasRole(Permissions.ROLE_INVENTORY_ADMIN))
    ) {
      return [];
    }

    return this.DEMO_HOOKS_NODE;
  }
}
