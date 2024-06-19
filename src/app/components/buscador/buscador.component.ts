import { Component } from '@angular/core';
//aqui tenemos que agarrar el parametro que mandemos por URL
import { ActivatedRoute } from '@angular/router';
//hay que llamarlo de la parte del servicio
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',

})

export class BuscadorComponent {

  heroes:any[] = []
  termino:string = '';

  //aqui lo utilizo
  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService){

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{

      this.termino = params['palabra']
      //esto regresa el arreglo
      this.heroes = this._heroesService.buscarHeroes(params['palabra']);
      console.log(this.heroes);
    })

  }

}
