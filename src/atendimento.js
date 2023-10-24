import { products } from "./data/products.js";

import CardProduto from "./components/CardProduto";

// Executa ao carregar a página
(() => {
  const cardCombustiveis = document.querySelector("#card-combustiveis");
  cardCombustiveis.innerHTML = products.map(CardProduto).join("");

  window.localStorage.setItem("@gasify-carrinho", JSON.stringify([]));

  document.getElementsByName('form').forEach(form => {
    form.onsubmit = (event) => event.preventDefault()
  })
})();

// Executa ao clicar no botão de adicionar ao carrinho
export function atualizarCarrinho(itemCarrinho) {
  const carrinho = JSON.parse(window.localStorage.getItem("@gasify-carrinho"));
  if (carrinho && carrinho.find((item) => item.id === itemCarrinho.id)) {
    let indexItem = carrinho.findIndex((item) => item.id === itemCarrinho.id);

    if (itemCarrinho.quantidade === 0) {
      carrinho.splice(indexItem, 1);
    } else {
      carrinho[indexItem] = itemCarrinho;
    }
  } else {
    carrinho.push(itemCarrinho);
  }

  window.localStorage.setItem("@gasify-carrinho", JSON.stringify(carrinho));

  const valorTotal = carrinho.reduce((acc, item) => acc + item.valor, 0);
  const ccTotal = carrinho.reduce(
    (acc, item) => acc + item.cc_for_unit * item.quantidade,
    0
  );

  atualizarValorTotal(valorTotal);
  atualizarCCTotal(ccTotal);
}

function atualizarValorTotal(valorTotal) {
  document.querySelector("#total").textContent = `R$ ${valorTotal.toFixed(2)}`;
}

function atualizarCCTotal(ccTotal) {
  document.querySelector(
    "#total-cc"
  ).innerHTML = `<img src="./images/logoLS-no-bg.svg" class="mr-2" alt="créditos de carbono"/>${ccTotal.toFixed(
    2
  )} CC`;
}
