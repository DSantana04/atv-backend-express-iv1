curl --request POST \
  --url https://atv-backend-express-iv1.vercel.app/user/login \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user1",
    "email": "user1@example.com",
    "password": "wrongpass"
}'