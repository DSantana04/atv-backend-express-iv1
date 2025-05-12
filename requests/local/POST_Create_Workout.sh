curl -X POST http://localhost:3000/workout \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjE1YmQ4MTM1Yjg3MzkyMjZlNGQ5NSIsImVtYWlsIjoiYW5vdGhlcmVtYWlsZXhhbXBsZUBnbWFpbC5jb20iLCJpYXQiOjE3NDcwMTcwNjQsImV4cCI6MTc0NzAyMDY2NH0.c9WJJ56BxB5t2sMHo7f0UkHygkDLijOw4RMQa4qCtAY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Treino de Peito",
    "duration": 45,
    "notes": "Foco em resistência",
    "exercises": [
      {
        "name": "Supino Reto",
        "sets": 4,
        "reps": 10,
        "weight": 60
      },
      {
        "name": "Crucifixo Inclinado",
        "sets": 3,
        "reps": 12,
        "weight": 12
      }
    ]
  }'