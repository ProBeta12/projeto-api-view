import pymongo
# Conexão
servidor = pymongo.MongoClient("mongodb://localhost:27017/")

banco = servidor['maternidade']
# colecao= banco['tabela']
# colecao = banco.create_collection("users")
# colecao.create_index("id", unique=True)

# Inserir um novo documento
# usuario = {
#     "nome": "Francisco",
#     "sobrenome": "Marconi",
#     "cpf": "123.456.789-00",
#     "email": "francisco.nunes@gmail.com",
#     "senha": "testedeguerrilha"
# }
# documento = {
#     "nome": "Ana",
#     "sobrenome": "Silva",
#     "idade": 30,
#     "cpf": "123.456.789-00",
#     "endereco": "rua doutor antonio,bairro nobre",
#     "controle de parto": "vivo",
#     "peso bebe": 3.2,
#     "pos parto": "Normal",
#     "deficiencia": " nenhuma",
#     "acompanhamento medico": "2 consultas",
#     "periodo de gestacao": "janeiro/agosto",
#     "ano": 2022,
#     "sexo": "Feminino"
# }
# resultado = colecao.insert_one(documento)

# Listar as coleções do banco de dados
# print(banco.list_collection_names())
# print(resultado)
