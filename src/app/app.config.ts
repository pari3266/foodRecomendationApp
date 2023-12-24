import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { restaurantResolver } from './resolvers/restaurant.resolver';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    importProvidersFrom([
      BrowserAnimationsModule,
      RouterModule,
      restaurantResolver,
      NgxsModule.forRoot([], {
        developmentMode: true
      }),
      NgxsDispatchPluginModule.forRoot(),
      HttpClientModule
    ])
  ],
};

