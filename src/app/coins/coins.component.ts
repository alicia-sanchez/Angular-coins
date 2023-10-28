import { Component, OnInit } from '@angular/core';
import { ICoins } from '../icoins';
import { CoinsService } from '../coins.service';



@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent  implements OnInit {
  
  coins:ICoins[]=[];
  search: string = '';
  selectedCoin: ICoins | undefined;
  modal: boolean = false;
  
  constructor(private service: CoinsService){}

  ngOnInit(): void {
      this.getAll();
  }

  openModal(coin: ICoins) {
    this.selectedCoin = coin;
    this.modal = true;
  }

  
  

  getAll() {
    this.service.fetchAll().subscribe((data: any) => {
      this.coins = data.data;

    });
  }
}
