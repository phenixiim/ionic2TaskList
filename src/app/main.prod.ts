import {platformBrowser} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';

import {AppModuleNgFactoryry} from './app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
