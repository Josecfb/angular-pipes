import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  {
  nombreLower: string = 'josé carlos';
  nombreUpper: string = 'JOSÉ CARLOS';
  nombreMal: string = 'jOsé carLos';

  fecha:Date = new Date();

}
