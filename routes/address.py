# -*- coding: utf-8 -*-

from flask import Blueprint, jsonify, request, render_template

address_bp = Blueprint('address', __name__, url_prefix='/address')


@address_bp.route('/')
def address():
    return render_template('address.html')