import { Component } from '@angular/core';
//primero importo el servicio para poder usarlo
import { HeroesService, Heroe } from '../../services/heroes.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})


export class HeroesComponent{
  //creo una variable arreglo
  heroes:Heroe[]=[];

//private, el alias del servicio
  constructor(private _heroesService:HeroesService,
              private _router:Router

    ){

      console.log("constructor")


  }

  ngOnInit() {
    //lo va a recibir en this.heroe que es la variable arreglo vacia que se creo arriba, y lo iguala al servicio
    //el cual apunta al metodo de ese servicio el cual es publico
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx:number){
    //recibo un arreglo
    this._router.navigate(['/heroe',idx ]);
    console.log(idx);
  }

}
