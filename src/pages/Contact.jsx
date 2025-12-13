import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    // prevent the default behaviors of the browser
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
    // clear the input fields
    setName('');
    setEmail('');
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Contact Me
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white w-32 px-4 py-2 rounded cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact;