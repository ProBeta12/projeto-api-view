from flask import Flask
from add_user import usuario
from add_tabela import tabela_bp
from flask_cors import CORS


main = Flask(__name__)
CORS(main)

main.register_blueprint(usuario)
main.register_blueprint(tabela_bp)

if __name__ == '__main__':
    main.run(debug=True)