document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('mensagens').addEventListener('submit', (e) => {
        e.preventDefault();

        var mensagemEntrada = document.getElementById('mensagem-entrada').value;
        var mensagemSaida = document.getElementById('mensagem-saida');

        mensagemSaida.innerText = mensagemEntrada;

        mensagemEntrada.innerText = '';

    });

});