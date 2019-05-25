from datetime import datetime, timedelta
from urllib.parse import urlencode

import jwt
import requests

# Change these to fit the service account you set up
sa_email = "bjks69j24te000b24tf0@bjfb7m3httut79sc9hsg.serviceaccount.d21s.com"
key_id = "bjks82324te000b24tg0"
key_secret = "d45b1ca248714a0cb84d1690c1a03354"


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
    "iss": sa_email
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

# Now let's list out the projects

# It can be used as a query string parameter:
projects = requests.get(projects_api + "?" + urlencode({"token": access_token})).json()
print("Request projects via query parameter ({}?token={}):".format(projects_api, access_token))
print(projects)
print()

# Or we can use it as a header:
projects = requests.get(projects_api, headers={"authorization": "bearer " + access_token}).json()
print("Request projects via header ('authorization': 'bearer {}'):".format(access_token))
print(projects)