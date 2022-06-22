let conta = 1;
let turno = document.getElementById('turno');

let res = document.getElementById('res');

let caixas = document.querySelectorAll('.quadrados');

turno.textContent = ('Vez do jogador: X');

let contarX = document.getElementById('contX');
let contarO = document.getElementById('contO');

let placarX = 0;
let placarO = 0;

function definirTurno(conta) {
    if(conta % 2 == 0) {
        turno.textContent = ('Vez do jogador: X');
        return true
    } else {
        turno.textContent = ('Vez do jogador: O');
        return false
    }
}

caixas.forEach(caixa => {
    caixa.addEventListener('click', function (){
        valorDoBloco(caixa);
        if (definirTurno(conta)) {
            this.style.background = '#1cabdb';
        } else { 
            this.style.background = '#00ff48';
        }
        conta++
    })
})

function valorDoBloco (atual){
    if (definirTurno(conta)){
        atual.innerText = ('o');
    } else {
        atual.innerText = ('x');
    }

    if (res.innerText != 'Jogador: X venceu!' & res.innerText != 'Jogador: O venceu!' & res.innerText != 'Empate!'){
    resultado(caixas[0], caixas[1], caixas[2], caixas[3], caixas[4], caixas[5], caixas[6], caixas[7], caixas[8])
    }
    atual.classList.add('disabledbutton');
}

function resultado (a1, a2, a3, b1, b2, b3, c1, c2, c3) {
    if (verificarResultadoX(a1,a2,a3) || verificarResultadoX(b1,b2,b3)|| verificarResultadoX(c1,c2,c3) || verificarResultadoX(a1,b1,c1) ||verificarResultadoX(a2,b2,c2) || verificarResultadoX(a3,b3,c3)|| verificarResultadoX(a1,b2,c3)|| verificarResultadoX(a3,b2,c1)){

        resultadoModal (`Vencedor: Jogador: X`, '#00ff48', '0', '', 'auto 3rem');
        desativarTodasCaixas();
        placarX++ ;
        contarX.innerText = (placarX);
        return

    } else if (verificarResultadoO(a1,a2,a3) || verificarResultadoO(b1,b2,b3)|| verificarResultadoO(c1,c2,c3) || verificarResultadoO(a1,b1,c1) ||verificarResultadoO(a2,b2,c2) || verificarResultadoO(a3,b3,c3)|| verificarResultadoO(a1,b2,c3)|| verificarResultadoO(a3,b2,c1)) {

        resultadoModal (`Vencedor: Jogador: O`, '#4180bb', '', '0', 'auto 3rem');
        desativarTodasCaixas();
        placarO++ ;
        contarO.innerText = (placarO);
        return

    } else if(conta == 9) {
        resultadoModal ('Empate!', '#79817f', '0', '0', 'auto');
    }
}

function verificarResultadoO (item1, item2, item3) {
    if (item1.innerText == 'o' && item2.innerText == 'o' && item3.innerText == 'o') {
        return true
    }
}

function verificarResultadoX (item1, item2, item3) {
    if (item1.innerText == 'x' && item2.innerText == 'x' && item3.innerText == 'x') {
        return true
    }
}

function reset () {
    if (conta > 0){

        conta = 1;

        for ( let i = 0; i < caixas.length; i++){
            limparBlocos(caixas[i]);
            caixas[i].style.background = 'initial';
        }

        turno.textContent = ('Vez do jogador: X')
        res.innerHTML = '';
        res.style.zIndex = '-1';
        res.style.opacity = '0';
    }
}

function limparBlocos (bloco){
    bloco.innerHTML = '';
    let caixasTravadas = document.querySelectorAll('.disabledbutton')

    for (let index = 0; index < caixasTravadas.length; index++) {
        const caixaTravada = caixasTravadas[index];
        caixaTravada.classList.remove('disabledbutton')
        
    }
    return limparBlocos
}

const resultadoModal = (texto, cor, esq, dir, margem) => {
    res.style.opacity = '1';
    res.innerText = texto;
    res.style.background = cor;
    res.style.left = esq;
    res.style.right = dir;
    res.style.margin = margem;
    res.style.zIndex = 2;
}

function desativarTodasCaixas() {
    caixas.forEach ( desativar => {
        desativar.classList.add('disabledbutton');
    })
}
