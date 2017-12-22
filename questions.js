/*1) concat:
- juntar essas duas arrays em uma só
- [1, 2, 3] [4, 5, 6]
- [1, 2, 3, 4, 5, 6]*/

const number1 = [1,2,3]

const number2  = [4,5,6]

const result = number1.concat(number2)

// No result estou recebendo number1 que e um array e concatenado com o number2 que e outro array

console.log(result)

/*2) fill:
- escolher um valor(1) e vai mudar todos os outros de uma arrays
- [1, 2, 3]
- [1, 1, 1]*/

let letras = ['a','b','c']
letras.fill('d')

console.log(letras)

/*3) filter:
- filtrar todos os valores de uma array e retornar apenas os valores iguais a 2
- [1, 2, 3, 2, 4, 2]
- [2, 2, 2]*/

function filtrar(valor){
    return valor == 2
}
let recebendo = [1,2,3,2,4,2].filter(filtrar)

console.log(recebendo)


/*4) find:
- verificar se existe um valor(2) na array e retorná-lo
- [1, 2, 3, 4]
- 2*/

function localizar(valor){
    return valor ==2
}

let localizado = [1,2,3,4,5].find(localizar)

console.log(localizado)


/*5) includes:
- verificar se existe um valor (2) numa array e retornar true (se achar) ou false (se não achar)
- [1, 2, 3, 4, 5]
- true*/


let teste2 = [1,2,3,4,5].includes(2)

console.log(teste2)


/*6) indexOf:
- retornar o index do primeiro valor (2) achado
- [1, 2, 3, 4, 5]
- 1*/

let array = [1,2,3,4,5]

console.log(array.indexOf(4))


/*7) push:
- inserir um valor no último elemento de uma array
- [1, 2, 3, 4, 5]
- 6*/

let number = [1,2,3,4,5]

number.push(6)

console.log(number)


/*8) shift:
- remover o últmo valor de uma array
- [1, 2, 3, 4, 5]
- [2, 3, 4, 5]*/

let number = [1,2,3,4,5]

number.shift(0)

console.log(number)