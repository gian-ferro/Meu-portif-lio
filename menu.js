// Seleciona o botão de abrir o menu pelo seu ID
let btnMenu = document.getElementById('btn-menu');

// Seleciona o menu mobile pelo seu ID
let menu = document.getElementById('menu-mobile');

// Seleciona a sobreposição do menu pelo seu ID
let overlay = document.getElementById('overlay-menu');

// Verifica se todos os elementos necessários foram encontrados
if (btnMenu && menu && overlay) {
    // Adiciona um ouvinte de evento de clique no botão de abrir o menu
    btnMenu.addEventListener('click', () => {
        // Adiciona a classe 'abrir-menu' ao menu para exibi-lo
        menu.classList.add('abrir-menu');
    });

    // Adiciona um ouvinte de evento de clique no menu mobile
    menu.addEventListener('click', () => {
        // Remove a classe 'abrir-menu' do menu para ocultá-lo
        menu.classList.remove('abrir-menu');
    });

    // Adiciona um ouvinte de evento de clique na sobreposição do menu
    overlay.addEventListener('click', () => {
        // Remove a classe 'abrir-menu' do menu para ocultá-lo
        menu.classList.remove('abrir-menu');
    });
}

// Adiciona um ouvinte de evento para quando o conteúdo do DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário pelo seu ID
    const form = document.getElementById('contactForm');
    
    // Verifica se o formulário foi encontrado
    if (form) {
        // Adiciona um ouvinte de evento de submissão ao formulário
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Seleciona o botão de envio dentro do formulário
            const submitButton = form.querySelector('button[type="submit"]');
            // Armazena o texto original do botão
            const originalButtonText = submitButton.textContent;

            // Desabilita o botão e muda o texto para indicar que o envio está em progresso
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            // Prepara os dados do formulário para envio
            const formData = new FormData(form);

            // Envia o formulário usando a API Fetch
            fetch('https://formsubmit.co/gian.costaferro@gmail.com', {
                method: 'POST',
                body: formData, // Envia os dados do formulário
                headers: {
                    'Accept': 'application/json' // Define o tipo de resposta esperada
                }
            })
            .then(response => {
                // Verifica se a resposta foi bem-sucedida
                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }
                return response.json(); // Converte a resposta em JSON
            })
            .then(data => {
                // Exibe os dados recebidos no console
                console.log(data);
                // Limpa os campos do formulário
                form.reset();
                // Exibe um alerta indicando que o formulário foi enviado com sucesso
                alert('Formulário enviado com sucesso!');
                // Se desejar, redireciona para uma página de agradecimento
                // window.location.href = 'https://seusite.com/obrigado.html';
            })
            .finally(() => {
                // Reabilita o botão e restaura o texto original
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            });
        });
    } else {
        // Exibe um erro no console se o formulário não for encontrado
        console.error('Formulário não encontrado');
    }
});
