"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, JWTManager
import datetime
import json 

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route ('/signup', methods = ['POST'])
def signup_user():
    request_body = request.get_json()
    print(request_body)

    user = User.query.filter_by(email = request_body['email']).first()

    if user is None:
        user = User (
            username = request_body['username'],
            email = request_body['email'],
            password = request_body['password'],
            is_active = True
        )

        user.save()
        return ("Usuario registrado")
    else:
        return ("El usuario ya esta registrado")

@api.route ('/login', methods = ['POST'])
def log_user():
    request_body = request.get_json()
    print(request_body)

    user = User.query.filter_by(email = request_body['email']).first()

    if user:
        if user.password == request_body['password']:
            tiempo = datetime.timedelta(minutes = 2)
            token = create_access_token (identity = request_body['email'], expires_delta = tiempo)
            return jsonify ({
                "duracion": tiempo.total_seconds(),
                "mensaje": f"Bienvenido {request_body['email']}",
                "token": token
            }
            )
        else :
            return jsonify({"error": "La contraseña no es correcta"})
    else :
        return jsonify({"error": "El usuario no existe"}), 400

@api.route("/private", methods = ["GET"])
@jwt_required()
def private_view():
    identidad = get_jwt_identity()
    return jsonify({"mensaje": "Tienes permiso para entrar", "permiso": True, "email":identidad})