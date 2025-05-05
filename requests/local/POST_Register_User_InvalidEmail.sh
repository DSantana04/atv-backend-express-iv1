curl --request POST \
  --url 'http://localhost:3000/user/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "themostnewuser3",
    "email": "notanemailgmail.com",
    "password": "ValidPass123"
}'