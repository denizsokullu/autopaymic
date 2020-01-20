const baseUrl = 'https://autopaymic-backend.herokuapp.com';
// const baseUrl = 'http://127.0.0.1:8000';

async function accounts() {
  const response = await fetch(`${baseUrl}/accounts`);
  return await response.json();
}

async function createCreditCard(data) {
  const response = await fetch(`${baseUrl}/credit-card`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

async function createBankAccount(data) {
  const response = await fetch(`${baseUrl}/bank-account`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  responseData = await response.json();
  return responseData;
}

async function deleteCreditCard(id) {
  const response = await fetch(`${baseUrl}/credit-card/${id}`, {
    method: 'DELETE',
  });

  return response;
}

async function deleteBankAccount(id) {
  const response = await fetch(`${baseUrl}/bank-account/${id}`, {
    method: 'DELETE',
  });

  return response;
}

export { accounts, createCreditCard, createBankAccount, deleteBankAccount, deleteCreditCard }
