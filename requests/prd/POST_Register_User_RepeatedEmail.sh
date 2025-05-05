curl --request POST \
  --url 'https://atv-backend-express-iv1.vercel.app/user/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "anotheruser",
    "email": "anotheremailexample@gmail.com",
    "password": "AnotherPassword"
}'