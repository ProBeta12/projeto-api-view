const container = document.querySelector('.quadro_home');
const popup = document.querySelector('.popup');
const btn = document.querySelector('.post');
const popup_sair = document.querySelector('.Sair_popup');

btn.onclick = () => {
  popup.style.opacity = '1';
  popup.style.pointerEvents = "all";
};

popup_sair.onclick = () => {
  popup.style.opacity = '0';
  popup.style.pointerEvents = "none";
};



async function getTabela() {
  try {
    const response = await fetch("http://localhost:5000/tabelas", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}

const tabela = await getTabela();

async function delTabela(_id) {
  try {
    const response = await fetch(`http://localhost:5000/tabelas/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}



function excluirItem(_id) {
  delTabela(_id)
  const element = document.querySelector(`[data-id="${_id}"]`);
      element.remove();
}




function editar(_id) {
  console.log(tabela,_id)
}

window.excluirItem = excluirItem;
window.editar = editar;



tabela.forEach(itens => {
  const card = ` 
  <section class="card" data-id="${itens._id}">
        <div class="card_head ">
            <h2 class="card_head_nome">${itens.nome}</h2>
            <section class="card_head_botoes">
                <button class="botao_editar" onclick="editar(${itens._id})">Editar</button>
                <button class="botao_deletar"  onclick="excluirItem(${itens._id})">Deletar</button>
            </section>
        </div>
        <div class="card_body">
            <section class="dados_da_mae">
                <h3>Dados da Gestante:</h3>
                <section>
                    <div class="mae_lado_1">
                        <div>
                            Nascimento: ${itens.data_nascimento}
                        </div>
                        <div>
                            Endereço: ${itens.endereco}
                        </div>
                        <div>
                            Acompanhamento Médico: ${itens.acompanhamento_medico}
                        </div>
                    </div>
                    <div class="mae_lado_2">
                        <div>
                            CPF: ${itens.cpf}
                        </div>

                        <div>
                            Pós-Parto: ${itens.pos_parto_mae}
                        </div>
                    </div>
                </section>
                <div>Período de Gestação: ${itens.periodo_gestacao}</div>
                
            </section>
            <section class="dados_do_bebe">
                <h3>Dados do bebê:</h3>
                <div>
                    Controle de Parto: ${itens.controle_parto}
                </div>
                <section>
                    <div class="bebe_lado_1">Pós-Parto: ${itens.pos_parto_bebe}</div>
                    <div class="bebe_lado_2">Peso: ${itens.peso_bebe}</div>
                </section>
                <div>
                    Sexo: ${itens.sexo_bebe}
                </div>
                <div>
                    Deficiência: ${itens.deficiencia}
                </div>
            </section>
        </div>
    </section>
  `;
  container.innerHTML += card;

});



const form = document.querySelector('.formulario');
const inputs = form.querySelectorAll('input');

const values = {};

form.addEventListener('submit', event => {
  event.preventDefault();
  
  inputs.forEach(input => {
    values[input.name] = input.value;
  });

  console.log(values);
  fetch('http://localhost:5000/tabelas', {
  method: 'POST',
  body: JSON.stringify(values),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => location.reload())
.catch(error => console.error(error));
});



