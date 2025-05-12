curl -X PUT http://localhost:3000/workout/682160ce2adf628ebc8ece07 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjE1YmQ4MTM1Yjg3MzkyMjZlNGQ5NSIsImVtYWlsIjoiYW5vdGhlcmVtYWlsZXhhbXBsZUBnbWFpbC5jb20iLCJpYXQiOjE3NDcwMTcwNjQsImV4cCI6MTc0NzAyMDY2NH0.c9WJJ56BxB5t2sMHo7f0UkHygkDLijOw4RMQa4qCtAY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Treino Atualizado",
    "duration": 60,
    "notes": "Mudança de foco para hipertrofia",
    "exercises": [
      {
        "name": "Supino Inclinado",
        "sets": 4,
        "reps": 8,
        "weight": 70
      }
    ]
  }'