curl -X POST http://localhost:3000/workout \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjE2ZTIyMTRlYzc1NjNkZGQ1ZmNiOSIsImVtYWlsIjoiYW5vdGhlcmVtYWlsZXhhbXBsZUBnbWFpbC5jb20iLCJpYXQiOjE3NDcwMjIxOTMsImV4cCI6MTc0NzAyNTc5M30.bwtumSUnm7q0QojO6Pwf8rMh72vZINiROdHN62dmMCM" \
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