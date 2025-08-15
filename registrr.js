document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário e os campos de input
    const form = document.querySelector('.form');
    const nomeInput = form.querySelector('input[placeholder="nome de usuário"]');
    const emailInput = form.querySelector('input[placeholder="email ou número de telefone"]');
    const dataNascimentoInput = form.querySelector('input[placeholder="dd/mm/yyyy"]');
    const senhaInput = form.querySelector('input[placeholder="senha"]');
    const confirmarSenhaInput = form.querySelector('input[placeholder="confirmar senha"]');
    const botaoEntrar = form.querySelector('.btn');

    // Adiciona um "ouvinte de evento" de clique ao botão
    botaoEntrar.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link, que é redirecionar imediatamente
        event.preventDefault();

        // 1. Obtém os valores dos campos
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const dataNascimento = dataNascimentoInput.value.trim();
        const senha = senhaInput.value.trim();
        const confirmarSenha = confirmarSenhaInput.value.trim();

        // 2. Realiza a validação dos dados
        if (!nome || !email || !dataNascimento || !senha || !confirmarSenha) {
            alert('Por favor, preencha todos os campos!');
            return; // Impede que o código continue
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return; // Impede que o código continue
        }

        // 3. Se todas as validações passarem, exibe uma mensagem e redireciona
        alert('Cadastro realizado com sucesso!');
        
        // Redireciona o usuário para a página de destino
        window.location.href = 'ola novamente.html';
    });
});