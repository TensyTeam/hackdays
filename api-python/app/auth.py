from datetime import datetime, timedelta
from urllib.parse import urlencode

import jwt
import requests

from keys import sa_email, key_id, key_secret

def auth():
    auth_endpoint = "https://identity.disruptive-technologies.com/oauth2/token"

    api_root = "https://api.disruptive-technologies.com/v2"
    projects_api = api_root + "/projects"

    now = datetime.now()

    headers = {
    #   "alg" is configured during jwt.encode(...) below
        "kid": key_id
    }

    payload = {
        "iat": now,
        "exp": now + timedelta(hours=1),
        "aud": auth_endpoint,
        "iss": sa_email,
    }

    encoded_jwt = jwt.encode(payload=payload,
                            key=key_secret,
                            algorithm='HS256',
                            headers=headers)

    token_response = requests.post(url=auth_endpoint, data={
        "assertion": encoded_jwt,
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer"
    }).json()

    # This is our access token
    access_token = token_response["access_token"]
    return access_token

# # Now let's list out the projects
