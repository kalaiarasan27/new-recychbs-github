# # utils.py

# import requests
# from django.conf import settings

# def verify_email_hunter(email):
#     api_key = settings.HUNTER_API_KEY
#     url = f'https://api.hunter.io/v2/email-verifier?email={email}&api_key={api_key}'
    
#     response = requests.get(url)
#     data = response.json()

#     if 'data' in data:
#         status = data['data']['status']
#         if status == 'valid':
#             return True
#         else:
#             return False
#     return False


# utils.py
import requests
from decouple import config 
from django.conf import settings
import os
from dotenv import load_dotenv


load_dotenv()

# DEBOUNCE_API_KEY = config('DEBOUNCE_API_KEY')
# DEBOUNCE_API_KEY = settings.DEBOUNCE_API_KEY
DEBOUNCE_API_KEY = os.getenv('DEBOUNCE_API_KEY')
            # auth_token = os.getenv('TWILIO_ACCOUNT_AUTH_TOKEN')

def check_email_validity(email):
    debounce_url = 'https://api.debounce.io/v1/'
    params = {
        'api': DEBOUNCE_API_KEY,
        'email': email
    }
    
    try:
        response = requests.get(debounce_url, params=params)
        if response.status_code == 200:
            result = response.json()
            # Result has a 'debounce' key with a status like 'Safe', 'Invalid', etc.
            return result['debounce']
        else:
            return {'error': 'Failed to validate email'}
    except requests.exceptions.RequestException as e:
        return {'error': str(e)}
