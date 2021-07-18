

const formularioContato = document.getElementById('formulario');

formularioContato.addEventListener('submit',  function (e) {

    e.preventDefault()

    let nome = document.getElementById('name').value;
    let fone = document.getElementById('fone').value;
    let email = document.getElementById('email').value;
    let texto = document.getElementById('texto').value; 
    

    fetch('https://webhook.site/d5a9c939-340f-4719-8536-95ba1bb9a5e2', {

        method: 'POST',

        body: JSON.stringify({

            name: nome,
            fone: fone,
            email: email,
            texto: texto

        })

    })
   
})


function enviar() {
    alert("Os seus dados foram enviados com sucesso!"); 

}