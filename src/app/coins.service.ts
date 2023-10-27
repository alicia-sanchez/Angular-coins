import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICoins } from './icoins';


@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http:HttpClient) { }
  url = 'https://api.coincap.io/v2/assets';

  fetchAll() {
    console.log("Fetching data from the API...");
    return this.http.get<ICoins[]>(this.url)
   
  }
}
