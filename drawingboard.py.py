
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/save_drawing', methods=['POST'])
def save_drawing():
    drawing_data = request.json  

    return jsonify({'message': 'Drawing saved successfully'})

if __name__ == '__main__':
    app.run(debug=True)
