function jogar(jogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const pc = opcoes[Math.floor(Math.random() * 3)];

    let resultado = '';

    if (jogador === pc) {
        resultado = 'Empate!';
    } else if (
        (jogador === 'pedra' && pc === 'tesoura') ||
        (jogador === 'papel' && pc === 'pedra') ||
        (jogador === 'tesoura' && pc === 'papel')
    ) {
        resultado = 'Você ganhou! :)';
    } else {
        resultado = 'Você perdeu! :(';
    }

    document.getElementById('resultado').innerHTML = 
        `Você escolheu <b>${jogador}</b> e o PC escolheu <b>${pc}</b>. <br>${resultado}`;
}
