import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionBarFactory, ActionBarItem } from '@c8y/ngx-components';
import { DemoActionBarItemComponent } from './action-bar-item.component';

/**
 * This actions bar button is only visible at 'action-bar' path.
 */
@Injectable()
export class DemoHooksActionBarFactory implements ActionBarFactory {
  private readonly DEMO_ACTION_BAR_NODE: ActionBarItem = {
    priority: 100,
    placement: 'right',
    component: DemoActionBarItemComponent,
  };

  get(activatedRoute?: ActivatedRoute) {
    return this.DEMO_ACTION_BAR_NODE;
  }
}
