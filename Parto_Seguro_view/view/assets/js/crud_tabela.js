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