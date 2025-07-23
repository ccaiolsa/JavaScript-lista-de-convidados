
document.addEventListener('DOMContentLoaded', function(){
    const primeiraSubmissao = document.querySelector('.primeiro');
    const segundaSubmissao = document.querySelector('.segundo');
    const terceiraSubmissao = document.querySelector('.terceiro');
    const quartaSubmissao = document.querySelector('.quarto');
    const lista = document.getElementById('lista');

    let convidado = {
        nome :'',
        numeroAcompanhante : '',
        nomeAcompanhante: '',
        presente: '',
    }

    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function(){
        const nome = document.getElementById('nome-convidado');

        convidado.nome = nome.value;
        
        primeiraSubmissao.style.display = 'none';
        segundaSubmissao.style.display = 'flex';
    })

    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', function(){
        const numeroAcompanhante = document.getElementById('acompanhantes');
        
        convidado.numeroAcompanhante = numeroAcompanhante.value;

        segundaSubmissao.style.display = 'none';
        terceiraSubmissao.style.display = 'flex';
    })

    const btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', function(){
        const nomeAcompanhante = document.getElementById('nome-acompanhante');

        convidado.nomeAcompanhante = nomeAcompanhante.value;

        terceiraSubmissao.style.display = 'none';
        quartaSubmissao.style.value = 'flex';
    })

    const btn4 = document.getElementById('btn4');
    btn4.addEventListener('click', function(){
        const presente = document.getElementById('presente');

        convidado.presente = presente.value;

        quartaSubmissao.style.display = 'none';
        primeiraSubmissao.style.display = 'flex';
    })
    
})