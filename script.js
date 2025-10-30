// Verifica se o arquivo foi carregado
console.log("O JavaScript do Instituto Escudo Tartaruga foi carregado!");

// Exemplo: Função para mostrar um alerta simples ao clicar no título
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('header h1');
    
    if (titulo) {
        titulo.addEventListener('click', () => {
            alert('Bem-vindo ao Instituto Escudo Tartaruga!');
        });
    }

    // Exemplo para o formulário (cadastro.html)
    const formulario = document.querySelector('.formulario-voluntario');
    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            // Previne o envio padrão do formulário
            evento.preventDefault(); 
            
            // Simulação de processamento de dados
            console.log("Formulário de cadastro enviado com sucesso!");
            
            // Exibe uma mensagem de sucesso para o usuário
            alert("Obrigado por se candidatar! Entraremos em contato em breve.");
            
            // Limpa o formulário após a submissão
            formulario.reset();
        });
    }
});