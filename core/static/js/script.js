document.addEventListener('DOMContentLoaded', () => {
    console.log('O site foi carregado completamente!');

    // Exemplo de funcionalidade: Adicionar ao carrinho (apenas um alerta simples)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productItem = event.target.closest('.product-item');
            const productName = productItem.querySelector('h4').textContent;
            alert(`"${productName}" foi adicionado ao seu carrinho (funcionalidade em desenvolvimento)!`);
            // Aqui você adicionaria a lógica real para adicionar ao carrinho (e.g., usando localStorage, API, etc.)
        });
    });

    // Exemplo de validação de formulário de contato (muito básica)
    const contactForm = document.querySelector('#contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Aqui você enviaria os dados para um servidor (fetch API) ou mostraria uma mensagem de sucesso
                alert(`Mensagem enviada com sucesso!\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);
                contactForm.reset(); // Limpa o formulário
            } else {
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    }
});