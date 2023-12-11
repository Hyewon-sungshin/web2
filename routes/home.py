# -*- coding: utf-8 -*-

from flask import Blueprint, jsonify, request, render_template

home_bp = Blueprint('home', __name__)


@home_bp.route('/')
def home():
    return render_template('home.html')
