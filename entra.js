document.addEventListener('DOMContentLoaded', function() {
  
    const form = document.querySelector('.form');
    const emailOuTelefoneInput = form.querySelector('input[placeholder="email ou número de telefone"]');
    const senhaInput = form.querySelector('input[placeholder="senha"]');
    const botaoEntrar = form.querySelector('.btn');

   
    botaoEntrar.addEventListener('click', function(event) {
      
        event.preventDefault();

     
        const emailOuTelefone = emailOuTelefoneInput.value.trim();
        const senha = senhaInput.value.trim();

    
        if (!emailOuTelefone || !senha) {
            alert('Por favor, preencha todos os campos!');
            return; 
        }
        
       
        alert('Login realizado com sucesso!');
        

        window.location.href = 'ola novamente.html';
    });
});