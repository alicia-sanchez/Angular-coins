export interface ICoins {
    id: string; 
    rank: number;
    symbol: string;
    name: string;
    supply: number;
    maxSupply:number
    marketCapUsd: number;
    volumeUsd24Hr: number;
    vwap24Hr: number;
    explorer:string
    priceUsd: number;
  }
