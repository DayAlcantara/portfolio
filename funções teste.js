function imprimirNoConsole() {
 console.log("olá mundo");
}

imprimirNoConsole();


function imprimirUmNumero(num) {
    console.log(" O numero é:"+ num);

}

imprimirUmNumero(2);

function soma (a,b) {
    return a + b;

}

console.log(soma(5,10));


function podeDirigir ( idade, cnh) {
    if(idade >= 18 && cnh==true) {
        console.log ("pode dirigir");
    } else { 
        console.log("nao pode dirigir");
    }
}

podeDirigir (19,'true');
podeDirigir (10,'true');

