import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent {
  itemy = ["Item1", "Item2", "Item3"]
}
