let bloco1 = document.getElementById('div1')
let bloco2 = document.getElementById('div2')
let bloco3 = document.getElementById('div3')
let bloco4 = document.getElementById('div4')
let bloco5 = document.getElementById('div5')
let bloco6 = document.getElementById('div6')
let bloco7 = document.getElementById('div7')
let bloco8 = document.getElementById('div8')
let bloco9 = document.getElementById('div9')

let turno = document.getElementById('turno')
let res = document.getElementById('res')

let conta = 0

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

function rodar1() {
    conta++
    valorDoBloco(bloco1);
}


function rodar2() {
    conta++
    valorDoBloco(bloco2);
}

function rodar3() {
    conta++
    valorDoBloco(bloco3);
}

function rodar4() {
    conta++
    valorDoBloco(bloco4);
}

function rodar5() {
    conta++
    valorDoBloco(bloco5);
}

function rodar6() {
    conta++
    valorDoBloco(bloco6);
}

function rodar7() {
    conta++
    valorDoBloco(bloco7);
}

function rodar8() {
    conta++
    valorDoBloco(bloco8);
}

function rodar9() {
    conta++
    valorDoBloco(bloco9);

}

function reset () {
    if (conta > 0){

        conta = 0

        limparBlocos(bloco1)
        limparBlocos(bloco2)
        limparBlocos(bloco3)
        limparBlocos(bloco4)
        limparBlocos(bloco5)
        limparBlocos(bloco6)
        limparBlocos(bloco7)
        limparBlocos(bloco8)
        limparBlocos(bloco9)

        turno.textContent = ('Vez do jogador: X')
        res.innerHTML = ''
    }
}

function resultado (a1, a2, a3, b1, b2, b3, c1, c2, c3) {
    if (a1.innerText == 'x' && a2.innerText == 'x' && a3.innerText == 'x' || b1.innerText == 'x' && b2.innerText == 'x' & b3.innerText == 'x' || c1.innerText == 'x' && c2.innerText == 'x' && c3.innerText == 'x' || a1.innerText == 'x' && b1.innerText == 'x' && c1.innerText == 'x' || a2.innerText == 'x' && b2.innerText == 'x' && c2.innerText == 'x' || a3.innerText == 'x' && b3.innerText == 'x' && c3.innerText == 'x' || a1.innerText == 'x' && b2.innerText == 'x' && c3.innerText == 'x' || a3.innerText == 'x' && b2.innerText == 'x' && c1.innerText == 'x'){

        res.innerText = ('Jogador: X venceu!')
        res.style.background = '#4cb359'

    } else if (a1.innerText == 'o' && a2.innerText == 'o' && a3.innerText == 'o' || b1.innerText == 'o' && b2.innerText == 'o' & b3.innerText == 'o' || c1.innerText == 'o' && c2.innerText == 'o' && c3.innerText == 'o' || a1.innerText == 'o' && b1.innerText == 'o' && c1.innerText == 'o' || a2.innerText == 'o' && b2.innerText == 'o' && c2.innerText == 'o' || a3.innerText == 'o' && b3.innerText == 'o' && c3.innerText == 'o' || a1.innerText == 'o' && b2.innerText == 'o' && c3.innerText == 'o' || a3.innerText == 'o' && b2.innerText == 'o' && c1.innerText == 'o') {

        res.innerText = ('Jogador: O venceu!')
        res.style.background = '#4180bb'

    } else if(conta == 9) {
        res.innerText = ('Empate!')
        res.style.background = '#79817f'
    }
}

function valorDoBloco (atual){
    if (definirTurno(conta)){
        atual.innerText = ('o')
    } else {
        atual.innerText = ('x')
    }

    if (res.innerText != 'Jogador: X venceu!' & res.innerText != 'Jogador: O venceu!' & res.innerText != 'Empate!'){
    resultado(bloco1, bloco2, bloco3, bloco4, bloco5, bloco6, bloco7, bloco8, bloco9)
    }
    atual.setAttribute('class', 'disabledbutton')
}

function limparBlocos (bloco){
    bloco.innerHTML = ''
    bloco.setAttribute('class', 'quadrados')

    return limparBlocos
}

