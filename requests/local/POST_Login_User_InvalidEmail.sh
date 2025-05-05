curl --request POST \
  --url http://localhost:3000/user/login \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user1",
    "email": "invalid",
    "password": "password123"
}'