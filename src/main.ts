import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

// Register Syncfusion license (v.29)
registerLicense('ORg4AjUWIQA/Gnt2XFhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5WdUVjWXtXdHNdRWFbWkdx');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

