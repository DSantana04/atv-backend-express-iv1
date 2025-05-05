curl --request POST \
  --url https://atv-backend-express-iv1.vercel.app/user/register \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "theanothermostnewuser3",
    "email": "user3@example.com",
    "password": "123"
}'