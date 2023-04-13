import mongoengine


class User(mongoengine.Document):
    _id = mongoengine.SequenceField(required=True, primary_key=True)
    nome = mongoengine.StringField(required=True)
    email = mongoengine.StringField(required=True)
    cpf = cpf = mongoengine.StringField(required=True, min_length=11, max_length=11)
    senha = mongoengine.StringField(required=True)











# u = User()

# resultado=u.procurar_usuario('francisocskn@hajnja.com','12345678')
# print(resultado)

# user = {
#     "id": str(ObjectId()),
#     "nome": "francisco",
#     "sobrenome": "marconi",
#     "cpf": "1122222",
#     "email": "francisocskn@hajnja.com",
#     "senha": "12345678"
# }

# u = User()
# user_id = u.criar_user(user)
# print("Usuário adicionado com sucesso. ID:", user_id)