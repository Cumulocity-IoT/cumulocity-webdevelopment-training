import { hookNavigator, hookRoute } from '@c8y/ngx-components';
import { DemoHooksDashboardComponent } from './demo-hooks-dashboard.component';

export const demoHookDashboardProviders = [
  hookNavigator({
    path: 'demo-hooks-dashboard',
    icon: 'dashboard',
    label: 'Sample Dashboard',
  }),
  hookRoute({
    path: 'demo-hooks-dashboard',
    component: DemoHooksDashboardComponent,
  }),
];
