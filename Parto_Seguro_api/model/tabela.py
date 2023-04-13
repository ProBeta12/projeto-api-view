import mongoengine


class Tabela(mongoengine.Document):
    _id = mongoengine.SequenceField(required=True, primary_key=True)
    nome = mongoengine.StringField(null=True, default= "Não Informado")
    cpf = mongoengine.StringField(null=True, default= "Não Informado")
    data_nascimento = mongoengine.StringField(null=True, default="Não Informado")
    endereco = mongoengine.StringField(null=True, default="Não Informado")
    controle_parto = mongoengine.StringField(null=True, default="Não Informado")
    peso_bebe = mongoengine.StringField(null=True, default="Não Informado")
    pos_parto_mae = mongoengine.StringField(null=True, default="Não Informado")
    pos_parto_bebe = mongoengine.StringField(null=True, default="Não Informado")
    deficiencia = mongoengine.StringField(null=True, default="Não Informado")
    acompanhamento_medico = mongoengine.StringField(null=True, default="Não Informado")
    periodo_gestacao = mongoengine.StringField(null=True, default="Não Informado")
    ano = mongoengine.StringField(null=True, default="Não Informado")
    sexo_bebe = mongoengine.StringField(null=True, default="Não Informado")




