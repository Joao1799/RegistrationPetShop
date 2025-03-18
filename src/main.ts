import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


setTimeout(()=> {
  (document.getElementById('loading-screen') as HTMLElement).style.display = 'none';
  (document.querySelector('app-root') as HTMLElement).style.display = 'block';

  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
},1000);
