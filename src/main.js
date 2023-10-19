import '../styles/main.css';

import CardProduto from './components/CardProduto';

const cardCombustiveis = document.querySelector('#card-combustiveis');
cardCombustiveis.innerHTML = CardProduto();

