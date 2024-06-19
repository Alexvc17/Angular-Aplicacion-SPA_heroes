import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//Este se encarga de iniciar el modulo Raiz

import { AppModule } from './app/app.module';//Este es el modulo raiz


/*Primero platformBrowserDynamic() carga una plataforma de angular en el navegador, lo que significa que angular
inicia y carga los servicios necesarios para que angular funcione correctamente en el navegador*/

/*Luego bootstrapModule(AppModule) carga el modulo raiz de la aplicacion angular , primero compila el modulo
raiz (incluyendo servicios, componentes directivas ..etc) y luego lo carga en el navegador . Durante este proceso
tambien se hacen verificaciones de seguridad  y se comprueban dependencias del modulo*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*Finalmente bootstrapModule() inicia la aplicacion angular en el navegador y se muestra la interfaz de usuario*/
