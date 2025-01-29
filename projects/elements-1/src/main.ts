import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

(async () => {
  const appRef = await createApplication(appConfig);
  const appComponent = createCustomElement(AppComponent, {
    injector: appRef.injector,
  });

  customElements.define('awesome-elements-1', appComponent);
})();
