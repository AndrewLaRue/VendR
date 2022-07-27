import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { Pop } from "../Utils/Pop.js";


function _drawSnacks() {
  let snacks = ProxyState.snacks
  console.log('drawing snacks', snacks);

  let template = ''
  snacks.forEach(s => template += s.CardTemplate)
  // @ts-ignore
  document.getElementById('snacks').innerHTML = template
  // build the html before finish
}

function _drawLunch(name){
// snacksService._drawLunch()
  let lunch = ProxyState.lunch
  let template = ''
  lunch.forEach(l => template += `
                <li>${l.id}</li>
  `)

  // @ts-ignore
  document.getElementById('lunch').innerHTML = template
}

export class SnacksController{

  

  constructor() {
// on page load
    _drawSnacks()
  }

  addCoin() {
snacksService.addCoin()
  }

  purchase(name) {
snacksService.purchase(name)
    _drawLunch()
  }


}