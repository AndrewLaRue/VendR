import { ProxyState } from "../AppState.js"
import { Snack } from "../Models/Snack.js"
import { Pop } from "../Utils/Pop.js"






class SnacksService{
  constructor() {
    
  }
  coins = 0
  
  // _drawLunch() {
    
  // }
  

 purchase(price) {
  let snack = ProxyState.snacks.find(s => s.name = price)
    // console.log(snack);
    // @ts-ignore
    if (price <= this.coins) {
      // @ts-ignore
      this.coins -= price
      // @ts-ignore
      document.getElementById('totalCoins').innerText = this.coins
      return console.log('Thank you for your purchase');

      
    } else {
      // @ts-ignore
      return console.log(`You cant afford that`);
    }
  }

    addCoin() {
    this.coins++
    // console.log(this.coins, 'coins');
    // @ts-ignore
    document.getElementById('totalCoins').innerText = this.coins
  }
}








export const snacksService = new SnacksService()