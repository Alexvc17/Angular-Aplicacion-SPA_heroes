import { Component } from '@angular/core';//cuando se dice que no se lee nunca es porque nunca se usa
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent} from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BuscadorComponent } from './components/buscador/buscador.component';




const APP_ROUTES:Routes = [
  //este es un arreglo de rutas
  //a-route-path-404
  //lo que nombre como path es lo a lo que voy a redireccionar le puedo conlocar cualquier nombre siempre y cuando sepa donde lo estoy redirigiendo
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  //aqui va el id del heroe que quiero mostrar
  { path: 'heroe/:id', component: HeroeComponent },
  //aqui escribimos la ruta de buscar  y el termino
  { path: 'buscar/:palabra', component: BuscadorComponent },
  //a-route-path-default, esta es una ruta por decfecto
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
