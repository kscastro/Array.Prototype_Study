/*3) filter:
- filtrar todos os valores de uma array e retornar apenas os valores iguais a 2
- [1, 2, 3, 2, 4, 2]
- [2, 2, 2]*/

function filtrar(valor){
    return valor == 2
}
let recebendo = [1,2,3,2,4,2].filter(filtrar)

console.log(recebendo)