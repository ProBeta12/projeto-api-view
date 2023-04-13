import pandas as pd
from flask import Flask

app = Flask(__name__)

#paginas
@app.route('/')
def inicial():
    return 'pagina inicial'

app.run()
