function soBoaNotica(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }

}

soBoaNotica(8.1)
soBoaNotica(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()   //Falso
seForVerdadeEuFalo(null)   //Falso
seForVerdadeEuFalo(undefined)  //Falso
seForVerdadeEuFalo(NaN)     //Falso
seForVerdadeEuFalo('')   //Falso
seForVerdadeEuFalo(0)    //Falso
seForVerdadeEuFalo(-1)   //verdadeiro
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})