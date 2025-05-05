curl --request POST \
  --url 'http://localhost:3000/user/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newuser2",
    "password": "23",
    "email": "emailexample@gmail.com"
    }'