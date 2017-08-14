import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import services
import { GoogleAnalyticsService } from './google-analytics/google-analytics.service';

// export  this services
export * from './google-analytics/google-analytics.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class AnalyticsModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: AnalyticsModule,
          providers: []
      };
  }
}
