import { hookNavigator, hookRoute } from '@c8y/ngx-components';
import { DemoHookRouteCompoment } from './demo-hook-route.component';

export const demoHookRouteProviders = [
  hookNavigator({
    path: 'demo-hooks',
    icon: 'check',
    label: 'Demo Hooks',
  }),
  hookRoute({
    path: 'demo-hooks',
    component: DemoHookRouteCompoment,
  }),
];
