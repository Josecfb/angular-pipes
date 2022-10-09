import { Component } from '@angular/core';

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
}
