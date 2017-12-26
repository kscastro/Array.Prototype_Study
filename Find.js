/*4) find:
- verificar se existe um valor(2) na array e retorná-lo
- [1, 2, 3, 4]
- 2*/

function localizar(valor){
    return valor ==2
}

let localizado = [1,2,3,4,5].find(localizar)

console.log(localizado)