let conta = 1;

let turno = document.getElementById('turno');

let res = document.getElementById('res')

let caixas = document.querySelectorAll('.quadrados');

turno.textContent = ('Vez do jogador: X')

function definirTurno(conta) {
    if(conta % 2 == 0) {
        turno.textContent = ('Vez do jogador: X')
        return true
    } else {
        turno.textContent = ('Vez do jogador: O')
        return false
    }
}

caixas.forEach(caixa => {
    caixa.addEventListener('click', function (){
        valorDoBloco(caixa);
        conta++
    })
})

function valorDoBloco (atual){
    if (definirTurno(conta)){
        atual.innerText = ('o')
    } else {
        atual.innerText = ('x')
    }

    if (res.innerText != 'Jogador: X venceu!' & res.innerText != 'Jogador: O venceu!' & res.innerText != 'Empate!'){
    resultado(caixas[0], caixas[1], caixas[2], caixas[3], caixas[4], caixas[5], caixas[6], caixas[7], caixas[8])
    }
    atual.classList.add('disabledbutton')
}

function reset () {
    if (conta > 0){

        conta = 1

        for ( let i = 0; i < caixas.length; i++){
            limparBlocos(caixas[i])
        }

        turno.textContent = ('Vez do jogador: X')
        res.innerHTML = ''
    }
}

function resultado (a1, a2, a3, b1, b2, b3, c1, c2, c3) {
    if (verificarResultadoX(a1,a2,a3) || verificarResultadoX(b1,b2,b3)|| verificarResultadoX(c1,c2,c3) || verificarResultadoX(a1,b1,c1) ||verificarResultadoX(a2,b2,c2) || verificarResultadoX(a3,b3,c3)|| verificarResultadoX(a1,b2,c3)|| verificarResultadoX(a3,b2,c1)){

        res.innerText = ('Jogador: X venceu!')
        res.style.background = '#4cb359'

    } else if (verificarResultadoO(a1,a2,a3) || verificarResultadoO(b1,b2,b3)|| verificarResultadoO(c1,c2,c3) || verificarResultadoO(a1,b1,c1) ||verificarResultadoO(a2,b2,c2) || verificarResultadoO(a3,b3,c3)|| verificarResultadoO(a1,b2,c3)|| verificarResultadoO(a3,b2,c1)) {

        res.innerText = ('Jogador: O venceu!')
        res.style.background = '#4180bb'

    } else if(conta == 9) {
        res.innerText = ('Empate!')
        res.style.background = '#79817f'
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

function limparBlocos (bloco){
    bloco.innerHTML = ''
    let caixasTravadas = document.querySelectorAll('.disabledbutton')

    for (let index = 0; index < caixasTravadas.length; index++) {
        const caixaTravada = caixasTravadas[index];

        caixaTravada.classList.remove('disabledbutton')
        
    }
    return limparBlocos
}

