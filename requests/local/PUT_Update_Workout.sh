curl -X PUT http://localhost:3000/workout/682172aad7da90e23461ca01 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjE2ZTIyMTRlYzc1NjNkZGQ1ZmNiOSIsImVtYWlsIjoiYW5vdGhlcmVtYWlsZXhhbXBsZUBnbWFpbC5jb20iLCJpYXQiOjE3NDcwMjIxOTMsImV4cCI6MTc0NzAyNTc5M30.bwtumSUnm7q0QojO6Pwf8rMh72vZINiROdHN62dmMCM" \
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