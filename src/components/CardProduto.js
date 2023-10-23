import { formatNumberPer100 } from "../utils";
import { atualizarCarrinho } from "../atendimento";
import itemCarrinho from "../models/itemCarrinho";

export default function CardProduto(product) {
  return `<div id="card" data-product_id="${
    product.id
  }" class="shadow-inner rounded-lg space-y-8 mx-auto mb-4">
      <div id="tipo-preco" class="flex m-4 justify-between">
          <p class="font-semibold text-2xl">${product.name}</p>
          <p>R$ ${formatNumberPer100(product.price)}/Litro</p>
      </div>
      <div class="flex space-x-8 mx-4 justify-between flex-wrap">
          <div class="space-y-2">
              <p class="text-md">Litros (L)</p>
              <input type="number" step="0.01" min="0" oninput="onChangeInputLitro(event, ${formatNumberPer100(
                product.price
              )})" class="border-[--gasify-cinza] border-2 rounded-md p-2 " id="quantidade" placeholder="0"/>
              <div id="alertDiv-litro" class="alertDiv text-red-500 self-center mb-2 hidden"></div>
          </div>
          <div class="space-y-2">
              <p class="text-md">Valor (R$)</p>
              <input type="number" step="0.01" min="0" oninput="onChangeInputValor(event, ${formatNumberPer100(
                product.price
              )})" class="border-[--gasify-cinza] border-2 rounded-md p-2" id="valor" placeholder="0,00"/>
              <div id="alertDiv-valor" class="alertDiv text-red-500 self-center mb-2 hidden"></div>
          </div>
      </div>
      <div id="cc-value" data-cc_for_unit="${
        product.cc_for_unit
      }" class="transition bg-[--gasify-cinza] w-[100%] mt-2 text-white text-center font-medium p-1 rounded-bl-md rounded-br-md">
          + ${product.cc_for_unit} CC por litro!
      </div></div>`;
}

// Input handles
window.onChangeInputLitro = (event, preco) => {
  const actualCard = event.target.closest("#card");
  const litro = Number(event.target.value);

  if (litro < 0) {
    event.target.classList.add("border-red-500");
    ativarAlertDiv(
      actualCard.querySelector("#alertDiv-litro"),
      "Insira uma quantidade válida!"
    );
    return;
  } else {
    event.target.classList.remove("border-red-500");
    actualCard.querySelector("#valor").classList.remove("border-red-500");
    desativarAlertDivs(actualCard);
  }

  const inputValor = actualCard.querySelector("#valor");
  const valor = litro * preco;

  inputValor.value = valor.toFixed(2);

  atualizarCC(actualCard, litro);
  atualizarCarrinho(
    new itemCarrinho(
      actualCard.dataset.product_id,
      litro,
      valor,
      Number(actualCard.querySelector("#cc-value").dataset.cc_for_unit)
    )
  );
};

window.onChangeInputValor = (event, preco) => {
  const actualCard = event.target.closest("#card");
  const valor = Number(event.target.value);

  if (valor < 0) {
    event.target.classList.add("border-red-500");
    ativarAlertDiv(
      actualCard.querySelector("#alertDiv-valor"),
      "Insira um valor válido!"
    );
    return;
  } else {
    event.target.classList.remove("border-red-500");
    actualCard.querySelector("#quantidade").classList.remove("border-red-500");
    desativarAlertDivs(actualCard);
  }

  const inputLitro = actualCard.querySelector("#quantidade");
  const litro = valor / preco;

  inputLitro.value = litro.toFixed(2);

  atualizarCC(event.target.closest("#card"), litro);
  atualizarCarrinho(
    new itemCarrinho(
      actualCard.dataset.product_id,
      litro,
      valor,
      Number(actualCard.querySelector("#cc-value").dataset.cc_for_unit)
    )
  );
};

// Alert handles
function ativarAlertDiv(alertDiv, msg) {
  alertDiv.classList.remove("hidden");
  alertDiv.textContent = `⚠ ${msg}`;
}

function desativarAlertDiv(alertDiv) {
  alertDiv.classList.add("hidden");
  alertDiv.textContent = "";
}

function desativarAlertDivs(actualCard) {
  desativarAlertDiv(actualCard.querySelector("#alertDiv-litro"));
  desativarAlertDiv(actualCard.querySelector("#alertDiv-valor"));
}

function atualizarCC(actualCard, litro = 0) {
  const ccValueTag = actualCard.querySelector("#cc-value");
  const cc_for_unit = Number(ccValueTag.dataset.cc_for_unit);
  const ccValue = cc_for_unit * litro;

  if (ccValue > 0) {
    actualCard.querySelector("#cc-value").textContent = `+ ${ccValue.toFixed(
      2
    )} CC`;
    ccValueTag.classList.remove("bg-[--gasify-cinza]");
    ccValueTag.classList.add("bg-[--gasify-verde]");
  } else if (ccValue <= 0 || litro < 0) {
    // não seria só um else??
    actualCard.querySelector(
      "#cc-value"
    ).textContent = `+ ${cc_for_unit.toFixed(2)} CC por litro!`;
    ccValueTag.classList.remove("bg-[--gasify-verde]");
    ccValueTag.classList.add("bg-[--gasify-cinza]");
  }
}
