// const baseUrl = 'http://127.0.0.1:8000';
const baseUrl = 'https://autopaymic-backend.herokuapp.com';

async function payees() {
  const response = await fetch(`${baseUrl}/payees`);
  return await response.json();
}

async function payee(id) {
  const response = await fetch(`${baseUrl}/payee/${id}`);
  return await response.json();
}

async function createPayee(data) {
  const response = await fetch(`${baseUrl}/payee`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

async function removePayee(id) {
  const response = await fetch(`${baseUrl}/payee/${id}`, {
    method: 'DELETE',
  });
  return await response;
}


export { payees, payee, createPayee, removePayee }
