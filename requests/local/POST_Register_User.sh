curl --request POST \
  --url 'http://localhost:3000/user/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newanotheruser",
    "email": "anotheremailexample@gmail.com",
    "password": "securepassword123"
    }'