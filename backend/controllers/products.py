from flask import Blueprint, request
from models.product import ProductModel
# from serializers.defect import DefectsSerializer
from marshmallow import ValidationError

router = Blueprint(__name__, 'products')

@router.route('/products', methods=['GET'])
def get_products():
  return 'Yo bro', 201

  