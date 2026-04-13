document.getElementById("whatsappBtn").addEventListener("click", function() {
  // Substitua pelo número do pedreiro
  const phoneNumber = "5519983904646"; 
  const message = "Olá, estou interessado em seus serviços de pedreiro. Poderia me fornecer mais informações?";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
