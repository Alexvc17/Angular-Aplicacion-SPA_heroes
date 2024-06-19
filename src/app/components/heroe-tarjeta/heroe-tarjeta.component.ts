import { Component ,Input, Output, EventEmitter} from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
//el input me dice que una propiedad que quiero que aparezca va a ser recibida desde afuera
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',

})
export class HeroeTarjetaComponent {

  //definimos estas dos propiedades las cuales seran recibidas desde el componente padre usando la directiva @Input
  @Input() heroe: any = {};//esto quiere decir que la propiedad horoe puede venir de afuera
  @Input() index: number = 0;

  //A continuacion voy a llamar la funcion verheroe desde heroes.component osea el padre
  //ESTE ES EL HIJO
  //aqui le pongo el evento que quiero que el padre escuche
  //voy a emitir un index de tipo number
  @Output() heroeSeleccionado: EventEmitter<number>;

  //aqui hay que inyectar
  constructor(private router: Router){

    //aqui debo inicializar el event emiter
    this.heroeSeleccionado = new EventEmitter();
  }

//este es el boton ver mas
  verHeroe(){
      //console.log(this.index);
      //this.router.navigate(['/heroe',this.index]);
      this.heroeSeleccionado.emit(this.index)
  }

}
