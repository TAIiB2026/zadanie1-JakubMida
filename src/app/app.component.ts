import { Component } from '@angular/core';
import { ListaComponent } from './lista/lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styles: []
})
export class AppComponent {
  public plantsList: string[] = ['Róża', 'Kaktus', 'Hortensja', 'Stokrotka'];
}
