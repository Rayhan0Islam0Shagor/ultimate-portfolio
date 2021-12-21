const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;

      formData[field.name] = field.value;
    });

    const res = await fetch('api/sendgrid', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Your email" />
      </div>
      <div>
        <label htmlFor="subject">Email</label>
        <input type="text" name="subject" id="subject" placeholder="Subject" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Message"
        />
      </div>
      <div>
        <button type="submit">
          send
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;