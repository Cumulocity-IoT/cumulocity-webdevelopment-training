import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CoreModule,
  BootstrapComponent,
  RouterModule,
} from '@c8y/ngx-components';
import { DemoHooksModule } from '../modules/demo-hooks/demo-hooks.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    CoreModule.forRoot(),
    DemoHooksModule,
  ],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
