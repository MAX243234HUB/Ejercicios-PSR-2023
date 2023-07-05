function suma(lista) {
    var acum = 0
    for (let i = 0; i < 5; i++) {
        acum = acum + lista[i]
    }
    return acum
}

const rslt = suma([1, 2, 3, 4, 5])

console.log(rslt)



