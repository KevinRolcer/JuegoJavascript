alert('Bienvenido al juego del número secreto');
let numeroSecreto = Math.floor(Math.random()*35)+1; //Sumando +1 se evita que salga 0 y asi llega hasta 10
let intento = 0;
let contador = 1;
let numero, maximo=3;

console.log(numeroSecreto);
while(intento != numeroSecreto){
    intento = parseInt(prompt('Elige un número entre 1 y 35'));
    console.log(typeof(intento));

    if(intento == numeroSecreto){
        alert(`Adivinaste, el número secreto es: ${numeroSecreto}, lo hiciste en ${contador} ${contador ==1 ? 'vez' : 'veces'}`);
    }else{
        if(intento<numeroSecreto){
            alert('El número secreto es mayor');
            console.log('El numero secreto es', numeroSecreto);
        }else{
            alert('El número secreto es menor');
            console.log('El numero secreto es', numeroSecreto);
        }
        contador ++;
        palabra = 'veces';
        if(contador>3){
            alert(`Llegaste al limite de ${maximo} intentos`);
            break;
        }
    }
}

