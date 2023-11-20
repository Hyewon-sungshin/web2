# -*- coding: utf-8 -*-

from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import datetime, json

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/address')
def address():
    return render_template('generic.html')


@app.route('/reservation')
def reservation():
    return render_template('elements.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)