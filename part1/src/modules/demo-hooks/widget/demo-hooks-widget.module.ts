import { NgModule } from '@angular/core';

import { DemoHooksWidgetComponent } from './demo-hooks-widget.component';
import { hookWidget } from '@c8y/ngx-components';
import { ContextWidgetConfig } from '@c8y/ngx-components/context-dashboard';

@NgModule({
  imports: [DemoHooksWidgetComponent],
  providers: [
    hookWidget({
      id: 'demo-hooks.widget',
      label: 'Demo Hooks',
      description: 'This is a sample widget',
      component: DemoHooksWidgetComponent,
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
export class DemoHooksWidgetModule {}
