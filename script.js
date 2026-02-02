// Pega o botão "NÃO" pelo ID que definimos no HTML
const botaoNao = document.getElementById('btn-nao');

// Adiciona um "ouvinte" para o evento de passar o mouse (mouseover)
botaoNao.addEventListener('mouseover', function() {
    
    // --- A MUDANÇA ESTÁ AQUI ---
    // No momento do primeiro "mouseover", nós forçamos ele a ficar "solto" na tela.
    // Isso garante que ele comece no lugar certo e só se solte agora.
    botaoNao.style.position = "fixed"; 
    // ---------------------------

    // Pega a largura e altura da janela do navegador
    // Subtraímos o tamanho do botão para ele não ficar parcialmente fora da tela
    const larguraJanela = window.innerWidth - botaoNao.offsetWidth;
    const alturaJanela = window.innerHeight - botaoNao.offsetHeight;

    // Gera números aleatórios para a nova posição X (horizontal) e Y (vertical)
    const novoX = Math.floor(Math.random() * larguraJanela);
    const novoY = Math.floor(Math.random() * alturaJanela);

    // Aplica as novas posições ao botão
    botaoNao.style.left = novoX + 'px';
    botaoNao.style.top = novoY + 'px';
});