# -*- coding: utf-8 -*-

from flask import Flask, session
from routes import address, qna, reservation, home

app = Flask(__name__, template_folder='templates')

app.register_blueprint(address.address_bp)
app.register_blueprint(qna.qna_bp)
app.register_blueprint(reservation.reservation_bp)
app.register_blueprint(home.home_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
