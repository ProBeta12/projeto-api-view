const form = document.querySelector('.formulario');
const inputs = form.querySelectorAll('input');

const values = {};

form.addEventListener('submit', event => {
  event.preventDefault();
  
  inputs.forEach(input => {
    values[input.name] = input.value;
  });

//   console.log(values.name);
  fetch(`http://localhost:5000/login?email=${values.email}&senha=${values.senha}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    
  }

})
.then(response => response.json())
.then(data => {
    // console.log(data)
    let dados =data
    if(dados.success){
        window.location.href = "http://127.0.0.1:5500/Parto_Seguro_view/view/routes/home/index.html";
    }
})
.catch(error => console.error(error));
});
