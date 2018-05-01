export const loginUser = (credentials) => (
  fetch('http://localhost:3001/api/v1/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((res) => res.json())
)
