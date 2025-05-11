curl --request POST \
  --url 'https://atv-backend-express-iv1.vercel.app/user/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newanotheruser",
    "email": "anotheremailexamplegmail.com",
    "password": "securepassword123"
    }'
