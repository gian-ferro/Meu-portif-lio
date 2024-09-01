let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

if (btnMenu && menu && overlay) {
    btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
    });

    menu.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            // Desabilita o botão e muda o texto
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            // Prepara os dados do formulário
            const formData = new FormData(form);

            // Envia o formulário
            fetch('https://formsubmit.co/gian.costaferro@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                form.reset();
                alert('Formulário enviado com sucesso!');
                // Se você tiver uma página de agradecimento, pode redirecionar aqui
                // window.location.href = 'https://seusite.com/obrigado.html';
            })
            .finally(() => {
                // Reabilita o botão e restaura o texto original
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            });
        });
    } else {
        console.error('Formulário não encontrado');
    }
});



