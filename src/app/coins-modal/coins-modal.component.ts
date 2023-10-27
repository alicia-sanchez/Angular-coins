import { Component, Input } from '@angular/core';
import { ICoins } from '../icoins';

@Component({
  selector: 'app-coins-modal',
  templateUrl: './coins-modal.component.html',
  styleUrls: ['./coins-modal.component.css']
})
export class CoinsModalComponent {
  @Input() selectedCoin: ICoins | null = null;
}
