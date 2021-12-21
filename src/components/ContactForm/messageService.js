async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then(() => {
      console.log('Email sent successfully');
    })
    .catch(() => {
      console.log('something went wrong!');
    });
}

const messageService = {
  async message({ name, email, message }) {
    return HttpClient('/api/sendgrid', {
      method: 'POST',
      body: {
        name,
        email,
        message,
      },
    });
  },
};

export default messageService;
