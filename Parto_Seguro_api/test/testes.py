import mongoengine
# from pymongo import MongoClient

class Usuario(mongoengine.Document):
    _id = mongoengine.SequenceField(required=True, primary_key=True)
    nome = mongoengine.StringField()



mongoengine.connect('maternidade')

usuario = Usuario(nome='franciscoaa')
usuario.save()