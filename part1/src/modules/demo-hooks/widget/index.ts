import { gettext, hookWidget } from '@c8y/ngx-components';
import { DemoHooksWidgetComponent } from './demo-hooks-widget.component';
import {
  exportConfigWithDevice,
  importConfigWithDevice,
} from '@c8y/ngx-components/widgets/import-export-config';
import {
  hookWidgetConfig,
  WidgetAssetSelectorComponent,
} from '@c8y/ngx-components/context-dashboard';

export const demoHookWidgetProviders = [
  hookWidget({
    id: 'demo-hooks.widget',
    label: 'Demo Hooks',
    description: 'This is a sample widget',
    component: DemoHooksWidgetComponent,
    data: {
      export: exportConfigWithDevice,
      import: importConfigWithDevice,
      settings: {
        noNewWidgets: false,
        widgetDefaults: {
          _width: 8,
          _height: 4,
        },
      },
    },
  }),
  hookWidgetConfig({
    widgetId: 'demo-hooks.widget',
    label: gettext('Device'),
    loadComponent: () => Promise.resolve(WidgetAssetSelectorComponent),
    priority: 100,
  }),
];
