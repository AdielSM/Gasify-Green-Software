import { products } from "../data/products";

export default function CardProduto() {
  return (
      products.map(product =>{
    
      let productHTML = `<div id="card" class="shadow-md rounded-lg space-y-8 mx-auto mb-4">
      <div id="tipo-preco" class="flex m-4 justify-between">
          <p class="font-semibold text-2xl">${product.name}</p>
          <p>R$ ${product.price / 100}/Litro</p>
      </div>
      <div class="flex space-x-4 mx-4 justify-between flex-wrap">
          <div class="space-y-2">
              <p class="text-md">Litros (L)</p>
              <input type="number" oninput="onChangeInputLitro(event, ${product.price / 100})" class="border-[--gasify-cinza] border-2 rounded-md p-2 " id="quantidade" placeholder="0"/>
          </div>
          <div class="space-y-2">
              <p class="text-md">Valor (R$)</p>
              <input type="number" oninput="onChangeInputValor(event, ${product.price / 100})" class="border-[--gasify-cinza] border-2 rounded-md p-2" id="valor" placeholder="0,00"/>
          </div>
      </div>
      <div class="bg-[--gasify-cinza] w-[100%] mt-2 text-white text-center font-medium p-1 rounded-bl-md rounded-br-md">
          + ${product.cc_for_unit} CC
      </div></div>`
    
      return productHTML
      }).join('')
    );
}

window.onChangeInputLitro = onChangeInputLitro
window.onChangeInputValor = onChangeInputValor
function onChangeInputLitro(event, preco) {
    const litro = Number(event.target.value)
    const inputValor = event.target.parentElement.parentElement.querySelector("#valor")
    const valor = litro * preco

    inputValor.value = valor.toFixed(2)
}
function onChangeInputValor(event, preco) {
  const valor = Number(event.target.value)
  const inputLitro = event.target.parentElement.parentElement.querySelector("#quantidade")
  const litro = valor / preco

  inputLitro.value = litro.toFixed(2)
}
