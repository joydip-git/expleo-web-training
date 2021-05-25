import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const platformRefObject = platformBrowserDynamic()
platformRefObject
  .bootstrapModule(AppModule)
  .then(res => console.log(res))
  .catch(e => console.log(e))
