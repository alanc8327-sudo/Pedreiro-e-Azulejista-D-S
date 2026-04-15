function enviarFeedback() {
   let nome = document.getElementById("feedbackNome").value;
   let orcamento = document.getElementById("feedbackOrcamento").value;
   let endereco = document.getElementById("feedbackEndereco").value;

   // Monta a mensagem
   let mensagem = `Olá tudo bem? Sou o ${nome}, e gostaria de solicitar um orçamento para os serviços de pedreiro e azulejista.\n\n` +
                  `Orçamento: ${orcamento}\n` +
                  `Endereço: ${endereco}`;

   // Número do WhatsApp no formato internacional (ex: Brasil 55 + DDD + número)
   let numero = "5519983904646"; 
   

   // Cria a URL
   let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;


   // Abre o WhatsApp com a mensagem pronta
   window.open(url, "_blank");
  
}

function enviarFeedback2() {
   let nome = document.getElementById("feedbackNome").value;
   let orcamento = document.getElementById("feedbackOrcamento").value;
   let endereco = document.getElementById("feedbackEndereco").value;

    // Monta a mensagem 
    let mensagem = `Ola tudo bem? Sou o ${nome}, e gostaria de solicitar um orçamento para os serviços de pedreiro e azulejista.\n\n` + 
                    `Orçamento: ${orcamento}\n` +
                    `Endereço: ${endereco}`;
    // Número do WhatsApp no formato internacional (ex: Brasil 55 + DDD + número)
    let numero = "5519987455667";
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    // Abre o WhatsApp com a mensagem pronta
    window.open(url, "_blank");
}
