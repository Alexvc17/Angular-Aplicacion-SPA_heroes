//Este archivo define las dependencias y configuraciones necesarias para el funionamiento de la app
//este archivo se ejecuta de segundo.. aqui se definen dependencias del nucleo de angular
import { NgModule } from '@angular/core';//esta libreria proveniente del archivo angular proporciona clases y servicios
import { BrowserModule } from '@angular/platform-browser';


//Rutas
import { APP_ROUTING } from './app.routes';


//Servicios
//Aqui se le dice a angular que dispone de ciertos servicios

import {HeroesService} from './services/heroes.service'

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  //Aqui pondremos todos nuestros servicios
  providers: [

    HeroesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
