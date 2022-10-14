import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  nombre:string = 'María';
  genero:string = 'femenino';
  generoMap = {
    'masculino':'o',
    'femenino': 'a'
  }
  clientes:string[] = ['María','Pepe','Juan','José','Ana'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }
  persona = {
    nombre:'José Carlos',
    edad: 55,
    pais: 'España'
  }
  cambiarNombre(){
    if (this.genero==='femenino'){
      this.nombre = 'Antonio';
      this.genero = 'masculino'
    } else {
      this.nombre = 'María';
      this.genero = 'femenino';
    }
    
  }

  borrarCliente(){
    this.clientes.pop();
  }
}
