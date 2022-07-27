import { generateId } from "../Utils/generateId.js"


export class Snack{
  constructor(name, price, img) {
    this.name = name
    this.price = price
    this.img = img
  }



  get CardTemplate() {
    return /*html*/ `
          <div id="${this.name}" class="text-center col-6 my-2 selectable" onclick="app.snacksController.purchase(${this.price})">
            <div class="bg-secondary border border-dark border-3 rounded">
              <h3>${this.name}</h3>
              <img class="img-size"
                src="${this.img}" alt="">
              <h5 id="snackPrice">Cost:${this.price}</h5>
            </div>
          </div>
    `
  }

}
