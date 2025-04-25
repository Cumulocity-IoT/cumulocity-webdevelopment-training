import { NgModule } from '@angular/core';

import { hookNavigator, hookRoute } from '@c8y/ngx-components';
import { DemoHookRouteCompoment } from './demo-hook-route.component';

@NgModule({
  imports: [DemoHookRouteCompoment],
  providers: [
    hookNavigator({
      path: 'demo-hooks',
      icon: 'check',
      label: 'Demo Hooks',
    }),
    hookRoute({
      path: 'demo-hooks',
      component: DemoHookRouteCompoment,
    }),
  ],
})
export class DemoHooksRouteModule {}
