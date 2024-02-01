let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
let numeroDeUsuario=0;
 console.log(numeroSecreto);
 console.log(listaNumeroSorteados);
 console.log(numeroDeUsuario);


function asignarTextoElemento(elemento,texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('P',`Acertaste el número en ${intentos} ${(intentos===1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');      
    }else{
        if (numeroDeUsuario<numeroSecreto) {
            asignarTextoElemento('P','El número secreto es mayor');              
        }else{
            asignarTextoElemento('P','El número secreto es menor');
        }
        intentos ++;
        limpiarcaja();
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciar(){
    //reiniciar los mensajes y variables de numero e intentos
    condicionesIniciales();
    //limpiar campos
    limpiarcaja();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true)

}

function limpiarcaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value = '';
}


function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else{
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            

        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;    
        }
    }
    
        
}

condicionesIniciales();