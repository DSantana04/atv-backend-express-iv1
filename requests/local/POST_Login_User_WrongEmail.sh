curl --request POST \
  --url http://localhost:3000/user/login \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user1",
    "email": "user123@example.com",
    "password": "wrongpass"
}'