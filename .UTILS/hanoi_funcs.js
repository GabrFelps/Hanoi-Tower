import * as utils from "./hanoi_basic_utils.js"


// Função para aplicar cor ao caractere "R", "G" ou "B"

export function alinhar_menu(){
  let strings_menu = utils.menu()
  let menu = ""
  let index = 0
  let index_list = []

  for (let texto of strings_menu){
      index ++
      index_list.push(index)
      menu += index < 10? " " + index + " > " + texto + "\n" : index + " > " + texto + "\n" 
  }
  return [menu, index_list]
}

export function validar_opcao(lista_opcoes, opcao){
  while (!lista_opcoes.includes(opcao)){
      opcao = utils.get_number("Essa opção é inválida, digite novamente: ");

  }
  return opcao

}

export function show_menu(){
  let [menu, index_list] = alinhar_menu()
  menu = utils.carregar_menu(menu)
  console.log(menu)
  let option = utils.get_number("Qual opção você deseja escolher?: ");
  option = validar_opcao(index_list, option);

  return option
}

/**
 * Recebe uma lista e retorna um elemento aleatório dessa lista.
 * @param {Array<String>} rgb Lista com os elementos blablabla 
 * @returns Retorna um elemento aleatório da lista.
 */
export function choice(rgb){
  let number = utils.get_random_number(1,rgb.length)
  return rgb[number - 1]

}

/**
 * Recebe um número referente a opção escolhida do menu e retorna as listas
 * @param {Number} option 
 * @returns Listas RGB formadas aleatóriamente
 */
export function retornar_torres_aleatorias(option){
  const torre1 = [];
  const torre2 = [];
  const torre3 = [];

  // distribuir elementos nas torres
  let count = 12;
  while (count > 0){
    let destinos = [torre1, torre2, torre3];
    let destino = destinos[utils.get_random_number(0, destinos.length - 1)];
    // adicionar elemento ao destino escolhido
    if (destino.length < 9){
      destino.push(get_randomRGB());
      count--;

    }
  }
  // de acordo com a opção, ocorre o tratamento das outras torres
  if (option == 1){
    return [torre1, [], []]
    
  } else if(option == 3){
    // lista de elementos resetan
    torre1.length = 0;
    torre2.length = 0;
    torre3.length = 0;
    for (let i = 0; i < 9; i++){
      torre1.push(get_randomRGB());
      torre2.push(get_randomRGB());
      torre3.push(get_randomRGB());
    }
    torre1.splice(0, 1)
  }

  return [torre1, torre2, torre3]
}

export function get_randomRGB(){
  let rgb = ["R", "G", "B"]
  return choice(rgb)
}

export function carregar_torre_hanoi(torre1, torre2, torre3){
  let torre_hanoi = 
  `-------------------Torre de Hanoi (RGB)------------------------
          RED               GREEN                BLUE
           ${torre1[8] || " "}                  ${torre2[8] || " "}                   ${torre3[8] || " "}
           ${torre1[7] || " "}                  ${torre2[7] || " "}                   ${torre3[7] || " "}     
           ${torre1[6] || " "}                  ${torre2[6] || " "}                   ${torre3[6] || " "} 
           ${torre1[5] || " "}                  ${torre2[5] || " "}                   ${torre3[5] || " "} 
           ${torre1[4] || " "}                  ${torre2[4] || " "}                   ${torre3[4] || " "} 
           ${torre1[3] || " "}                  ${torre2[3] || " "}                   ${torre3[3] || " "} 
           ${torre1[2] || " "}                  ${torre2[2] || " "}                   ${torre3[2] || " "}
           ${torre1[1] || " "}                  ${torre2[1] || " "}                   ${torre3[1] || " "} 
           ${torre1[0] || " "}                  ${torre2[0] || " "}                   ${torre3[0] || " "} 
---------------------------------------------------------------
  
  `
  return torre_hanoi
}