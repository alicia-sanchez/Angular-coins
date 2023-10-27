import { Component, OnInit } from '@angular/core';
import { ICoins } from '../icoins';
import { CoinsService } from '../coins.service';
import { CoinsModalComponent } from '../coins-modal/coins-modal.component';


@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})



export class CoinsComponent  implements OnInit {
  
  coins:ICoins[]=[];
  search: string = '';
  selectedCoin: ICoins | null = null;

  
  constructor(private service: CoinsService){}

  ngOnInit(): void {
      this.getAll();
  }

  openModal(coin: ICoins) {
    console.log('Ouverture de la modal avec la crypto-monnaie :', coin);
    this.selectedCoin = coin;
  }


  getAll() {
    this.service.fetchAll().subscribe((data: any) => {
      this.coins = data.data;

    });
  }
}
