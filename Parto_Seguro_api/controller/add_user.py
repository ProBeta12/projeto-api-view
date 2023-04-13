from flask import request,Blueprint
from model.user import User
import mongoengine

usuario = Blueprint('user', __name__)
mongoengine.connect('maternidade')


@usuario.route('/users', methods=['POST'])
def add_user():
    data = request.json
    user = User(**data)
    user.save()
    return {'message': 'Usuário adicionado com sucesso'}, 201


@usuario.route('/login', methods=['GET'])
def login():
    email = request.args.get('email')
    password = request.args.get('senha')

    user = User.objects(email=email, senha=password).first()

    if user:
        return {'success': True}, 200
    else:
        return {'success': False}, 401


