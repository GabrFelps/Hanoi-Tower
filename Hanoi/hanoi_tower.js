import { getstring } from "../.UTILS/hanoi_basic_utils.js";
import * as funcs from "../.UTILS/hanoi_funcs.js"

function main() {
  let option = funcs.show_menu()
  while (option !== 4){
    let [torre1, torre2, torre3] = funcs.retornar_torres_aleatorias(option);
    let torre_hanoi = funcs.carregar_torre_hanoi(torre1, torre2, torre3)
    let [torre1clone, torre2clone, torre3clone] = [torre1, torre2, torre3];
    let torre_hanoi2 = torre_hanoi
    console.clear()
    console.log(torre_hanoi)
    chamar_jogadores_e_carregar_vitoria(torre1, torre1clone, torre2, torre2clone, torre3, torre3clone, torre_hanoi, torre_hanoi2)
    
    option = funcs.show_menu()
    
  } 
}

function chamar_jogadores_e_carregar_vitoria(torre1, torre1clone, torre2, torre2clone, torre3, torre3clone, torre_hanoi, torre_hanoi2) {
  // Primeiro jogador
  let nome_jog1 = getstring("Nome do jogador 1: ");
  console.log(`${nome_jog1} está jogando...`);
  let count_jogador1 = carregar_jogo(torre1, torre2, torre3, torre_hanoi);

  // Segundo jogador
  let nome_jog2 = getstring("Nome do jogador 2: ");
  console.log(`${nome_jog2} está jogando...`);
  let count_jogador2 = carregar_jogo(torre1clone, torre2clone, torre3clone, torre_hanoi2);

  // Comparar número de movimentos
  if (count_jogador1 < count_jogador2) {
    console.log(`${nome_jog1} ganhou com ${count_jogador1} movimentos!`);
  } else if (count_jogador2 < count_jogador1) {
    console.log(`${nome_jog2} ganhou com ${count_jogador2} movimentos!`);
  } else {
    console.log("Empate! Ambos os jogadores fizeram o mesmo número de movimentos.");
  }

}


function todosIguais(lista, elemento) {
  for (let item of lista) {
    if (item !== elemento) {
      return false;
    }
  }
  return true;
}

function carregar_jogo(torre1, torre2, torre3, torre_hanoi) {
  let count = 0
  // Função para verificar se todas as torres estão na condição de vitória
  function verificar_vitoria() {
    return todosIguais(torre1, "R") && todosIguais(torre2, "G") && todosIguais(torre3, "B");
  }

  while (!verificar_vitoria()) {
    let movimento = getstring("Qual seu movimento? ").toLowerCase();
    console.clear()
    let [origem, destino] = movimento.split("");

    let dict_origem_destino = {
      "r": torre1,
      "g": torre2,
      "b": torre3
    };

    // Verifica se a torre de destino está cheia
    if (dict_origem_destino[destino].length === 9) {
      console.log("A lista de destino está cheia! Tente outra jogada.");
      continue; // Pula para a próxima iteração
    }

    // Verifica se a torre de origem não está vazia
    if (dict_origem_destino[origem].length > 0) {
      let lista_origem = dict_origem_destino[origem];
      let ultimo_elemento = lista_origem.pop(); // Remove o último elemento da torre de origem

      let lista_destino = dict_origem_destino[destino];
      lista_destino.push(ultimo_elemento); // Adiciona o elemento à torre de destino
    } else {
      console.log("A torre de origem está vazia. Tente outra jogada.");
    }

    // Atualiza o estado das torres
    count ++
    torre_hanoi = funcs.carregar_torre_hanoi(torre1, torre2, torre3);
    console.log(torre_hanoi);
  }

  console.log("Parabéns! Você completou o jogo.");
  return count
}

// Chama a função principal
main();