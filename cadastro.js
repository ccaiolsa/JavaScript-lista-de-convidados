document.addEventListener("DOMContentLoaded", function () {
  const primeiraSubmissao = document.querySelector(".primeiro");
  const segundaSubmissao = document.querySelector(".segundo");
  const terceiraSubmissao = document.querySelector(".terceiro");
  const quartaSubmissao = document.querySelector(".quarto");
  const lista = document.getElementById("lista");
  const iteracao = document.querySelector(".iteracao");
  const loop = document.querySelector(".loop");
  const sim = document.getElementById("sim");
  const nao = document.getElementById("nao");
  const excluir = document.querySelector('.excluir');

  let convidado = {
    nome: "",
    numeroAcompanhante: "",
    nomeAcompanhante: "",
    presente: "",
  };

    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function () {
      const nome = document.getElementById("nome-convidado");

      convidado.nome = nome.value;
      nome.value ="";

      primeiraSubmissao.style.display = "none";
      segundaSubmissao.style.display = "flex";
    });

    const btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", function () {
      const numeroAcompanhante = document.getElementById("acompanhantes");

      convidado.numeroAcompanhante = numeroAcompanhante.value;
      let valorConvertido = Number(numeroAcompanhante.value);
      numeroAcompanhante.value = "";

      segundaSubmissao.style.display = "none";
      if(valorConvertido == 0){
        terceiraSubmissao.style.display = 'none';
        quartaSubmissao.style.display = 'flex';
      }else{
        terceiraSubmissao.style.display = 'flex';
      }
    })
    const btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", function () {

    const nomeAcompanhante = document.getElementById("nome-acompanhante");
    convidado.nomeAcompanhante =nomeAcompanhante.value;
        
    nomeAcompanhante.value = "";
    terceiraSubmissao.style.display = 'none';
    quartaSubmissao.style.display = 'flex';    
    })

    const btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", function () {
      const presente = document.getElementById("presente");

      convidado.presente = presente.value;
      presente.value = "";

      quartaSubmissao.style.display = "none";
      
      lista.innerHTML += 
      `<tr>
      <td>${convidado.nome}</td>
      <td>${convidado.numeroAcompanhante}</td>
      <td>${convidado.nomeAcompanhante}</td>
      <td>${convidado.presente}</td>
      <td class="iteracao">${iteracao.innerHTML}</td>
      </tr>`;

      loop.style.display = "flex";
    });

    sim.addEventListener('click', function(){

        convidado.nome = "";
        convidado.numeroAcompanhante = "";
        convidado.nomeAcompanhante = "";
        convidado.presente = "";

        loop.style.display = 'none'
        primeiraSubmissao.style.display = 'flex'
    })
    nao.addEventListener('click', function(){
        loop.style.display = 'none';
        window.print();
    })

  excluir.addEventListener('click', function(e){
    if(e.target && e.target.classList.contains('excluir')) {
      const linha = e.target.closest('tr');
      if (linha){
        linha.remove();
      }
    }
  })
});
