# -*- coding: utf-8 -*-

from flask import Blueprint, jsonify, request, render_template

qna_bp = Blueprint('qna', __name__, url_prefix='/qna')


@qna_bp.route('/')
def qna():
    return render_template('address.html')