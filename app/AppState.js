import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snack } from "./Models/Snack.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  lunch = []

  snacks = [
new Snack('Water', 1, 'https://www.transparentpng.com/thumb/water-bottle/fO4Ttp-water-bottle-vector.png'),
new Snack('Tea', 2, 'https://www.transparentpng.com/thumb/tea/8Swlkn-tea-png.png'),
new Snack('Apple', 3, 'https://www.transparentpng.com/thumb/apple-fruit/iVyuBZ-apple-fruit-clipart-hd.png'),
new Snack('Chocolate', 4, 'https://www.transparentpng.com/thumb/chocolate/milk-chocolate-png-free-egpixh.png'),
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
