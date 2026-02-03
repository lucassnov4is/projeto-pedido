// 1. Pegar os elementos do HTML
const imagem = document.getElementById('img-biscoito');
const textoSorte = document.getElementById('texto-sorte');
const btnNovo = document.getElementById('btn-novo');

// --- NOVO: Carregando o som ---
// Certifique-se que o arquivo crec.mp3 está na pasta do projeto
const somCrec = new Audio('crec.mp3'); 
// ------------------------------

// 2. Criar a lista (Array) de frases
const frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Grandes conquistas exigem tempo e dedicação.",
    "Um pequeno gesto hoje pode mudar o amanhã.",
    "A sorte favorece a mente preparada.",
    "Acredite: algo maravilhoso está prestes a acontecer.",
    "O sucesso nasce da persistência diária.",
    "Sua criatividade será recompensada.",
    "Boas notícias chegarão de onde você menos espera.",
    "A felicidade começa com um sorriso.",
    "Confie mais em si mesmo.",
    "Novas oportunidades surgirão em breve.",
    "Um desafio inesperado trará crescimento.",
    "Seja paciente: tudo acontece no tempo certo.",
    "A perseverança abre portas invisíveis.",
    "Sua intuição está correta.",
    "Um encontro especial mudará sua perspectiva.",
    "Aprender algo novo trará grandes benefícios.",
    "A simplicidade é o caminho para a felicidade.",
    "Um passo de cada vez leva longe.",
    "Você está mais perto do que imagina.",
    "A gentileza voltará multiplicada.",
    "O esforço de hoje será o orgulho de amanhã.",
    "Não tema mudanças, elas trazem evolução.",
    "Algo que você perdeu retornará melhor.",
    "O equilíbrio é a chave para uma vida plena.",
    "Sua determinação inspira outras pessoas.",
    "Uma decisão corajosa trará bons frutos.",
    "Acredite no processo.",
    "Você colherá aquilo que plantar.",
    "A tranquilidade vem de dentro.",
    "Boas energias acompanham seus próximos passos.",
    "O sucesso começa com a coragem de tentar.",
    "Novas amizades trarão alegria.",
    "Seu talento será reconhecido.",
    "A paciência é uma forma de sabedoria.",
    "Você está no caminho certo.",
    "Um sonho antigo ganhará nova chance.",
    "A disciplina leva à liberdade.",
    "Sua dedicação fará a diferença.",
    "O aprendizado nunca é em vão.",
    "Uma surpresa positiva está a caminho.",
    "O otimismo abre caminhos.",
    "Você encontrará apoio quando mais precisar.",
    "A confiança transforma resultados.",
    "A vida recompensa quem não desiste.",
    "Um novo começo se aproxima.",
    "A serenidade trará clareza.",
    "Ouça mais o seu coração.",
    "O hoje constrói o amanhã.",
    "Sua persistência será recompensada.",
    "A mudança começa com uma decisão.",
    "A sorte acompanha quem age.",
    "Boas escolhas geram bons destinos.",
    "O sucesso é feito de constância.",
    "Um obstáculo revelará uma oportunidade.",
    "Sua força interior é maior do que imagina.",
    "A gratidão atrai prosperidade.",
    "O foco traz resultados duradouros.",
    "Você superará um desafio importante.",
    "A coragem abre novos caminhos.",
    "Um gesto simples trará grande alegria.",
    "Acredite no seu potencial.",
    "O conhecimento será seu maior aliado.",
    "A paciência evita muitos erros.",
    "O esforço silencioso traz grandes vitórias.",
    "Uma boa notícia alegrará seu dia.",
    "A sabedoria está em aprender com o tempo.",
    "Seus planos começarão a se concretizar.",
    "A constância vence a pressa.",
    "O equilíbrio traz prosperidade.",
    "Você inspira confiança.",
    "A clareza virá quando você desacelerar.",
    "O sucesso nasce da ação.",
    "Uma escolha sábia mudará tudo.",
    "A vida responde à sua atitude.",
    "Confie no que você construiu.",
    "O bem que você faz retorna.",
    "A persistência supera o talento.",
    "Você encontrará a resposta que procura.",
    "A calma é um sinal de força.",
    "Novos caminhos se abrirão.",
    "O aprendizado vem com a experiência.",
    "Sua jornada está apenas começando.",
    "A dedicação transforma sonhos em realidade.",
    "A sorte acompanha quem se move.",
    "Uma ideia simples trará bons resultados.",
    "Você está mais forte do que ontem.",
    "O progresso vem da consistência.",
    "Um novo desafio trará crescimento.",
    "A confiança é o primeiro passo para vencer.",
    "A felicidade está nas pequenas conquistas."
];


let biscoitoAberto = false;

// 3. Função que "Quebra" o biscoito
function quebrarBiscoito() {
    if(biscoitoAberto) return;

    // --- NOVO: Toca o som imediatamente ---
    somCrec.play();
    // --------------------------------------

    imagem.classList.add('tremer');

    setTimeout(function() {
        imagem.src = "biscoito-aberto.png"; 
        imagem.classList.remove('tremer');

        const numeroAleatorio = Math.floor(Math.random() * frases.length);
        
        textoSorte.innerText = frases[numeroAleatorio];
        textoSorte.classList.add('aparecer');

        btnNovo.style.display = 'inline-block';
        
        biscoitoAberto = true;
    }, 500);
}

// 4. Função para reiniciar tudo
function reiniciar() {
    imagem.src = "biscoito-fechado.png";
    textoSorte.classList.remove('aparecer');
    textoSorte.innerText = "Clique no biscoito para abrir!";
    btnNovo.style.display = 'none';
    biscoitoAberto = false;
}

imagem.addEventListener('click', quebrarBiscoito);
btnNovo.addEventListener('click', reiniciar);