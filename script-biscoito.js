// 1. Pegar os elementos do HTML
const imagem = document.getElementById('img-biscoito');
const textoSorte = document.getElementById('texto-sorte');
const btnNovo = document.getElementById('btn-novo');

// 2. Criar a lista (Array) de frases
// Você pode adicionar quantas frases quiser aqui!
const frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?"
];

// Variável para controlar se o biscoito já está aberto
let biscoitoAberto = false;

// 3. Função que "Quebra" o biscoito
function quebrarBiscoito() {
    if(biscoitoAberto) return; // Se já tá aberto, não faz nada

    // Adiciona classe de tremer
    imagem.classList.add('tremer');

    // Espera meio segundo (500ms) para trocar a imagem e mostrar a frase
    setTimeout(function() {
        // Troca a imagem
        imagem.src = "biscoito-aberto.png"; 
        imagem.classList.remove('tremer');

        // Sorteia uma frase
        // Math.random() gera 0.123... * tamanho da lista (ex: 7) = 0.8...
        // Math.floor arredonda para baixo (ex: 0) -> Índice da lista
        const numeroAleatorio = Math.floor(Math.random() * frases.length);
        
        // Coloca a frase no HTML
        textoSorte.innerText = frases[numeroAleatorio];
        textoSorte.classList.add('aparecer');

        // Mostra o botão de reiniciar
        btnNovo.style.display = 'inline-block';
        
        biscoitoAberto = true;
    }, 500);
}

// 4. Função para reiniciar tudo
function reiniciar() {
    imagem.src = "biscoito-fechado.png";
    textoSorte.classList.remove('aparecer');
    textoSorte.innerText = "Clique no biscoito para abrir!"; // Texto inicial
    btnNovo.style.display = 'none';
    biscoitoAberto = false;
}

// 5. Adicionar os eventos de clique
imagem.addEventListener('click', quebrarBiscoito);
btnNovo.addEventListener('click', reiniciar);