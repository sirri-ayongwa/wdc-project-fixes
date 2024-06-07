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
        "service_3cuvkls",
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
    <div className="p-2">
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-white mb-6">Keep in Touch</h2>

        <form ref={form} onClick={sendEmail} action="#">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
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
  );
}

export default ContactForm;
