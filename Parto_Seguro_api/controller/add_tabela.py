from flask import Blueprint, request
from model.tabela import Tabela
import mongoengine

tabela_bp = Blueprint('tabela', __name__)
mongoengine.connect('maternidade')

@tabela_bp.route('/tabelas', methods=['POST'])
def create_tabela():
    data = request.json
    tabela = Tabela(**data)
    tabela.save()
    return {'message': 'Tabela criada com sucesso'}, 201


@tabela_bp.route('/tabelas', methods=['GET'])
def read_tabelas():
    tabelas = Tabela.objects()
    return tabelas.to_json(), 200,{'Access-Control-Allow-Origin': '*'}


@tabela_bp.route('/tabela/<string:_id>', methods=['PUT'])
def update_tabela(_id):
    data = request.json
    Tabela.objects(_id=_id).update(**data)
    return {'message': 'Tabela atualizada com sucesso'}, 200


@tabela_bp.route('/tabelas/<string:_id>', methods=['DELETE'])
def delete_tabela(_id):
    Tabela.objects(_id=_id).delete()
    return {'message': 'Tabela deletada com sucesso'}, 200
