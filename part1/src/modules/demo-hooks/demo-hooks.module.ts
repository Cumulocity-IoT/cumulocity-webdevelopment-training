import { NgModule } from '@angular/core';

import { DemoHooksComponent } from './demo-hooks.component';
import {
  CoreModule,
  hookAction,
  hookActionBar,
  hookComponent,
  hookNavigator,
  hookRoute,
} from '@c8y/ngx-components';
import {
  ContextDashboardModule,
  ContextWidgetConfig,
} from '@c8y/ngx-components/context-dashboard';
import { DemoActionBarItemComponent } from './action-bar-item/action-bar-item.component';
import { DemoHooksActionBarFactory } from './action-bar-item/action-bar-item.factory';
import { DemoHooksDashboardComponent } from './demo-hooks-dashboard.component';

@NgModule({
  imports: [CoreModule, ContextDashboardModule],
  exports: [],
  declarations: [
    DemoHooksComponent,
    DemoActionBarItemComponent,
    DemoHooksDashboardComponent,
  ],
  providers: [
    hookComponent({
      id: 'demo-hooks.widget',
      label: 'Demo Hooks',
      description: 'This is a sample widget',
      component: DemoHooksComponent,
      data: {
        settings: {
          noNewWidgets: false,
          ng1: {
            options: {
              noDeviceTarget: false,
              groupsSelectable: false,
            },
          },
        },
      } as ContextWidgetConfig,
    }),
  ],
})
export class DemoHooksModule {}
