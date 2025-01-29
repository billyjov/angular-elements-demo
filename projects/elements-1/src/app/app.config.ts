import {
  ApplicationConfig,
  NgZone,
  // provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).ngZone
      ? { provide: NgZone, useValue: (globalThis as any).ngZone }
      : [],
    provideRouter(routes),
  ],
};
