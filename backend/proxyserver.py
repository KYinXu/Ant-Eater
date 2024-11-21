from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_BASE_URL = 'https://d1.supercook.com/dyn/results'

# Headers used in the direct API call
HEADERS = {
    'needsimage': '1',
    'app': '1'
}

# Default payload structure for the API
PARAMS = {
    'kitchen': 'jalapeno,potato,bell pepper,carrot,egg',
    'focus': '',
    'exclude': '',
    'kw': '',
    'catname': '',
    'start': '0',
    'fave': 'false',
    'lang': 'en',
    'cv': '2'
}

@app.route('/proxy', methods=['POST'])
def proxy():
    try:
        # Merge received data with the default payload
        # incoming_data = request.json
        # payload = {**DEFAULT_PAYLOAD, **incoming_data}

        # Make the API call with predefined headers and the merged payload
        response = requests.post(API_BASE_URL, headers=HEADERS, data=PARAMS)

        # Forward the API response back to the client
        return jsonify(response.json()), response.status_code
    except requests.exceptions.RequestException as e:
        return jsonify({'error': f'API Request failed: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Internal Server Error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
