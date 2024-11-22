from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_BASE_URL = 'https://d1.supercook.com/dyn/results'

@app.route('/proxy', methods=['POST'])
def proxy():
    try:
        # Get the incoming data 
        # currently only takes in the 'params' key from the incoming JSON
        data = request.get_json()
        params = data['params']
        headers = data['headers']

        response = requests.post(API_BASE_URL, headers=headers, data=params)

        # Forward the API response back to the client
        return jsonify(response.json()), response.status_code
    except requests.exceptions.RequestException as e:
        return jsonify({'error': f'API Request failed: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Internal Server Error: {str(e)}'}), 500

API_DETAILS_URL = 'https://d1.supercook.com/dyn/details'

@app.route('/proxy/details', methods=['POST'])
def proxy_details():
    try:
        # Get the incoming data 
        data = request.get_json()
        headers = {}
        params = data['params']
        
        response = requests.post("https://d1.supercook.com/dyn/details", headers=headers, data=params)
        return jsonify(response.json()), response.status_code
    except requests.exceptions.RequestException as e:
        return jsonify({'error': f'API Request failed: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Internal Server Error: {str(e)}'}), 500
    
if __name__ == '__main__':
    app.run(debug=True)
