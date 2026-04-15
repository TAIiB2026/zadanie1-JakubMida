import { Component, Input, signal, computed } from '@angular/core';

@Component({
  selector: 'app-nowy-komponent',
  standalone: false,
  templateUrl: './nowy-komponent.component.html',
  styles: ``
})
export class NowyKomponentComponent {
  @Input() public name! : string;
  public wilgotnosc = signal(0);

  updateWilgotnosc(): void{
    if(this.wilgotnosc() < 100){
      this.wilgotnosc.update(w => w+10);
    }
  }

  wilgotnoscStatus = computed(() => {
    if(this.wilgotnosc() < 40) return 'Roślina ma za sucho!';
    else if(this.wilgotnosc() >=40 && this.wilgotnosc() <=80 ) return 'Roślina jest poprawnie podlana!';
    else return 'Roślina ma za mokro!';
  });
}
