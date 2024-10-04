import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);
    // toast.success("hello");
    // return
    // console.log("working")
    emailjs
      .sendForm(
        "service_d3yy0xf",
        "template_zsnn9zs",
        form.current,
        "S6rrT9Cqk-qhVNtap"
      )
      .then((result) => {
        setPending(false);
        toast.success("Message sent", { theme: "dark" });
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((err) => {
        // console.log(err)
        setPending(false);
        toast.error(err.text);
      });
  };

  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="p-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2177.384248128347!2d-73.94953446419014!3d40.796686391626764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f61b2c85265d%3A0xecccdb9f66f2ad4e!2s1660%20Madison%20Ave%2C%20New%20York%2C%20NY%2010029%2C%20USA!5e0!3m2!1sen!2scd!4v1728035163853!5m2!1sen!2scd"
          height="450"
          style={{ border: "0", width: "100%", minWidth: "400px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="p-2 min-w-[400px]">
        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-blue-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-green-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <h2 className="text-2xl font-bold text-white mb-6">Keep in Touch</h2>
          <form ref={form} onSubmit={sendEmail} action="#">
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                name="from_email"
                id="email"
                type="email"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="Message"
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                rows="3"
                name="message"
                id="bio"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
