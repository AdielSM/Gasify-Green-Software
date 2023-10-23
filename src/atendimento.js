import { products } from './data/products.js';

import CardProduto from './components/CardProduto';

const cardCombustiveis = document.querySelector('#card-combustiveis');
cardCombustiveis.innerHTML = products.map(CardProduto).join('');

export function atualizarValorTotal() {
    const cards = document.querySelectorAll('#card')
    let total = 0
  
    cards.forEach(card => {
      const valor = Number(card.querySelector('#valor').value)
      total += valor
    })
  
    document.querySelector('#total').textContent = `R$ ${total.toFixed(2)}`
  
    return total
  }
  
export function atualizarCCTotal() {
const cards = document.querySelectorAll('#card')
let total = 0

cards.forEach(card => {
    const ccValueTag = card.querySelector('#cc-value')
    const ccValue = Number(ccValueTag.textContent.split(' ')[1])
    total += ccValue
})

document.querySelector('#total-cc').innerHTML = `<img src="./images/logoLS-no-bg.svg" class="mr-2" alt="créditos de carbono"/>${total.toFixed(2)} CC`

return total
}