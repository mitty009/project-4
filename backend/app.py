from flask import Flask
from environment.config import db_URI
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = db_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

ma = Marshmallow(app)

bcrypt = Bcrypt(app)

from controllers import products

app.register_blueprint(products.router, url_prefix="/api")

# ! Hello world flask app to start you off.
# @app.route('/')
# def index():
#     return "Hello, World!"

# @app.route('/api')
# def index():
#   return 'Yo bro'
