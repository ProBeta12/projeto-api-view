const img_menu = document.querySelector('.menu_img')
const sair_home =document.querySelector('.perfil_do_usuario')


sair_home.onclick = () => {
  const menu_sair=document.querySelector('.perfil_do_usuario_sair')
  menu_sair.classList.toggle('perfil_do_usuario_sair_ok');
}

img_menu.onclick = () =>{
  const menu = document.querySelector('.menu_lateral')
  menu.classList.toggle('menu_abrir');
  img_menu.classList.toggle('menu_abrir_img');
}
// mostrar o grafico
plots_grafico_1 = document.getElementById("plots_1");
plots_grafico_2 = document.getElementById("plots_2");
// plots_grafico_3 = document.getElementById("plots_3");
plots_grafico_4 = document.getElementById("plots_4");
// Example datasets for X and Y-axes 
var months = ["TotalGeral", "Mãe c/prénatal", "Mãe s/prénatal", "BebêsVivos", "Deficientes", "BebêsMortos", "MãeMortas"]; //Stays on the X-axis 
var traffic = [2000, 1200, 800, 1800, 300, 150, 80] //Stays on the Y-axis 

//Gráfico de Barras. 1
// Create an instance of Chart object:
new Chart(plots_grafico_1, {
    type: 'bar', //Declare the chart type 
    data: {
    labels: months, //X-axis data 
    datasets: [{
    data: traffic, //Y-axis data 
    
    //Color of each bar:
    backgroundColor: [
    "rgba(30,144,255)",
    "rgba(255,0,255)",
    "rgba(252, 5, 79)",
    "rgba(0,255,255)",
    "rgba(255,255,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)"],


     }]
    },

    //Creat title the grafic
        options: {
            title: {
              display: true,
              text: 'Relatório Anual de Partos (2021)',
              fontSize:20,
              font:{
                style: 'italic',
                family: 'Helvetica Neue'
              }
              
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
              }]
            },

        //Creat legend the grafic    
            legend: {display: false},
            datasets:[
                {
                    label:"dataset1"
                },
                {
                    label:"dataset2"
                },
            ]
          }
   
    });



// // Gráfico de Linha. 2
new Chart(plots_grafico_2, {
 type: 'line', //Declare the chart type 
 data: {
 labels: months, //X-axis data 
 datasets: [{
 data: traffic, //Y-axis data 
 backgroundColor: '#0000FF',
 borderColor: 'black',
 fill: false, //Fills the curve under the line with the babckground color. It's true by default 
 }]
 },
});




// // Gráfico de Linha 3
// // Create an instance of Chart object:
// new Chart(plots_grafico_3, {
//     type: 'line', //Declare the chart type 
//     data: {
//     labels: months, //X-axis data 
//     datasets: [{
//     data: traffic, //Y-axis data 
//     backgroundColor: '#0000FF', //Color of the dots 
//     borderColor: 'black', //Line color 
//     fill: false, //Fills the curve under the line with the babckground color. It's true by default 
//     }]
//     },
//     //Specify custom options: 
//     options:{
//     legend: {display: true}, //Remove the legend box by setting it to false. It's true by default. 
//     //Specify settings for the scales. To make the Y-axis start from zero, for instance:
//     scales:{
//     yAxes: [{ticks: {min: 0}}] //You can repeat the same for X-axis if it contains integers. 
//     }
//     } 
//    });




   // Gráfico Pizza

   // Create an instance of Chart object:
new Chart(plots_grafico_4, {
    type: 'pie', //Declare the chart type
    data: {
    labels: months, //Defines each segment
    datasets: [{
    data: traffic, //Determines segment size
    //Color of each segment
    backgroundColor: [
        "rgba(30,144,255)",
        "rgba(255,0,255)",
        "rgba(252, 5, 79)",
        "rgba(0,255,255)",
        "rgba(255,255,0)",
        "rgb(0,0,0)",
        "rgb(25,25,112)"],    
    }]
    },
    options:{
    legend: {display: true}, //This is true by default.
    
    }
    
   });