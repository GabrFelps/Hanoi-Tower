import {question} from "readline-sync";
// -----------------------Number Funcs-----------------------

export function get_number(mensagem){
  const numero = Number(question(mensagem))
  return numero
}

export function get_positive_number(msg){
  const number = get_number(msg)
  
  if (number <= 0){
    print("Número Inválido!")
    return get_positive_number(msg)
  }
  return number
}

export function get_number_in_range(mensagem, min, max){
  const numero = get_number(mensagem)
  
  if (numero < min || numero > max){
    print('Número inválido! Digite novamente')
    return get_number_in_range(mensagem, min, max)
  }
  
  return numero
}

export function get_random_number(min, max){
  return Math.floor(Math.random() * (max + 1 - min)) + min
} 
// --------------------String Funcs--------------------------
export function getstring(msg){
  return String(question(msg))
}

export function enter_to_continue(){
  return question("Enter to continue...") 
}

export function carregar_menu(menu){
  let menu_carregado = 
  `#---------- Hanoi Tower Game ----------#
${menu}
---------------------------------------`;
  return menu_carregado
}

export function menu(){
  let menu_option = [
    "Nível Fácil",
    "Nível Médio",
    "Nível Difícil",
    "Sair"
  ]
  return menu_option
}