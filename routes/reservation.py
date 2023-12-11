# -*- coding: utf-8 -*-

from flask import Blueprint, jsonify, request, render_template

reservation_bp = Blueprint('reservation', __name__, url_prefix='/reservation')


@reservation_bp.route('/')
def reservation():
    return render_template('reservation.html')


@reservation_bp.route('/check')
def check():
    return render_template('reservation-check.html')