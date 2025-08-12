import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CoreModule, RouterModule } from '@c8y/ngx-components';
import { demoHookRouteProviders } from '../modules/demo-hooks/route';
import { demoHookWidgetProviders } from '../modules/demo-hooks/widget';
import { demoHookDashboardProviders } from '../modules/demo-hooks/dashboard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(RouterModule.forRoot()),
    importProvidersFrom(CoreModule.forRoot()),
    demoHookRouteProviders,
    demoHookWidgetProviders,
    demoHookDashboardProviders,
  ],
};
