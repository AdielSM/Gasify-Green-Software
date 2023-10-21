import { products } from "../data/products";

export default function CardProduto() {
  return (
      products.map(product =>{
    
      let productHTML = `<div id="card" class="shadow-md rounded-lg space-y-8 mx-auto mb-4">
      <div id="tipo-preco" class="flex m-4 justify-between">
          <p class="font-semibold text-2xl">${product.name}</p>
          <p>R$ ${formatNumberPer100(product.price)}/Litro</p>
      </div>
      <div class="flex space-x-4 mx-4 justify-between flex-wrap">
          <div class="space-y-2">
              <p class="text-md">Litros (L)</p>
              <input type="number" step="0.01" min="0" oninput="onChangeInputLitro(event, ${formatNumberPer100(product.price)})" class="border-[--gasify-cinza] border-2 rounded-md p-2 " id="quantidade" placeholder="0"/>
          </div>
          <div class="space-y-2">
              <p class="text-md">Valor (R$)</p>
              <input type="number" step="0.01" min="0" oninput="onChangeInputValor(event, ${formatNumberPer100(product.price)})" class="border-[--gasify-cinza] border-2 rounded-md p-2" id="valor" placeholder="0,00"/>
          </div>
      </div>
      <div id="cc-value" data-cc_for_unit="${product.cc_for_unit}" class="transition bg-[--gasify-cinza] w-[100%] mt-2 text-white text-center font-medium p-1 rounded-bl-md rounded-br-md">
          + ${product.cc_for_unit} CC por litro!
      </div></div>`
    
      return productHTML
      }).join('')
    );
}

window.onChangeInputLitro = onChangeInputLitro
window.onChangeInputValor = onChangeInputValor

function onChangeInputLitro(event, preco) {
    const actualCard = event.target.closest('#card')
    const litro = Number(event.target.value)

    // Melhorar com algum alerta visual
    if (litro < 0) return

    const inputValor = actualCard.querySelector("#valor")
    const valor = litro * preco

    inputValor.value = valor.toFixed(2)

    atualizarCC(actualCard, litro)
}

function atualizarCC(actualCard, litro=0) {
  const ccValueTag = actualCard.querySelector('#cc-value')
  const cc_for_unit = Number(ccValueTag.dataset.cc_for_unit)
  const ccValue = cc_for_unit * litro;
  
  if (ccValue > 0) {
    actualCard.querySelector('#cc-value').textContent = `+ ${ccValue.toFixed(2)} CC`;
    ccValueTag.classList.remove('bg-[--gasify-cinza]')
    ccValueTag.classList.add('bg-[--gasify-verde]')
  } else {
    actualCard.querySelector('#cc-value').textContent = `+ ${cc_for_unit.toFixed(2)} CC por litro!`;
    ccValueTag.classList.remove('bg-[--gasify-verde]')
    ccValueTag.classList.add('bg-[--gasify-cinza]')
  }
}

function onChangeInputValor(event, preco) {
  const actualCard = event.target.closest('#card')
  const valor = Number(event.target.value)

  if (valor < 0) return

  const inputLitro = actualCard.querySelector("#quantidade")
  const litro = valor / preco

  inputLitro.value = litro.toFixed(2)

  atualizarCC(event.target.closest('#card'), litro)
}

// Pensar em algo visual pro erro
// function validateInput(input) {
//   if (input < 0) {
//     return 0;
//   }
//   return input;
// }

// Levar pra utils
function formatNumberPer100(number) {
  return number / 100;
}
