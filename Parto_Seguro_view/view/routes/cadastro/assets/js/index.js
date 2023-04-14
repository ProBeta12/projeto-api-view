const form = document.querySelector('.formulario');
const inputs = form.querySelectorAll('input');

const values = {};

form.addEventListener('submit', event => {
  event.preventDefault();
  
  inputs.forEach(input => {
    values[input.name] = input.value;
  });

  // console.log(values);
  fetch('http://localhost:5000/users', {
  method: 'POST',
  body: JSON.stringify(values),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => location.reload())
.catch(error => console.error(error.message));
});
