const pilarEci = ['charles', 'Pary', 'Gaby', 'Tiago', 'Elias'];

const valores = [1, 2, 3, 4, 5];

function imprimir(integrantes, indice){
    console.log(indice + integrantes);
}

pilarEci.forEach(imprimir);

let dobroValores = valores.map(function(valor){
    return valor * 2;
});

console.log(dobroValores);


