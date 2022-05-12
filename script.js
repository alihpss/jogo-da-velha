let conta = 0;

let turno = document.getElementById('turno');

let res = document.getElementById('res')

let blocos = [
document.getElementById('div1'),
document.getElementById('div2'),
document.getElementById('div3'),
document.getElementById('div4'),
document.getElementById('div5'),
document.getElementById('div6'),
document.getElementById('div7'),
document.getElementById('div8'),
document.getElementById('div9')
]; 

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

blocos.forEach(function(bloco){
    bloco.onclick = function () {
        valorDoBloco(bloco);
        conta++
    }
})

function reset () {
    if (conta > 0){

        conta = 0

        for ( let i = 0; i < blocos.length; i++){
            limparBlocos(blocos[i])
        }

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
    resultado(blocos[0], blocos[1], blocos[2], blocos[3], blocos[4], blocos[5], blocos[6], blocos[7], blocos[8])
    }
    atual.setAttribute('class', 'disabledbutton')
}

function limparBlocos (bloco){
    bloco.innerHTML = ''
    bloco.setAttribute('class', 'quadrados')

    return limparBlocos
}

