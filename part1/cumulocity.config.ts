import type { ConfigurationOptions } from '@c8y/devkit';
import { version, name } from './package.json';

export default {
  runTime: {
    version,
    name,
    dynamicOptionsUrl: true,
    remotes: {
      [name]: ['demoHookWidgetProviders'],
    },
    package: 'plugin',
    isPackage: true,
    noAppSwitcher: true,
    exports: [
      {
        name: 'Demo hooks plugin',
        module: 'demoHookWidgetProviders',
        path: './src/modules/demo-hooks/widget/index.ts',
        description: 'Demonstrate various hooks',
      },
    ],
  },
  buildTime: {
    federation: [
      '@angular/animations',
      '@angular/cdk',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@c8y/client',
      '@c8y/ngx-components',
      'ngx-bootstrap',
      '@ngx-translate/core',
      '@ngx-formly/core',
    ],
  },
} as const satisfies ConfigurationOptions;
