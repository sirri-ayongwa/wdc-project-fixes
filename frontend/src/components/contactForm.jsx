import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Icons

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [pending, setPending] = useState(false);
  const form = useRef();

  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("All fields are required!", { theme: "dark" });
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setPending(true);
    emailjs
      .sendForm(
        "service_d3yy0xf", // Replace with your service ID
        "template_zsnn9zs", // Replace with your template ID
        form.current,
        "S6rrT9Cqk-qhVNtap", // Replace with your public key
      )
      .then(() => {
        setPending(false);
        toast.success("Message sent successfully!", { theme: "dark" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setPending(false);
        toast.error(`Error: ${err.text}`);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-start bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-6 lg:px-24 gap-16">
      <div className="w-full lg:w-1/2 bg-gray-900 p-8 rounded-md shadow-lg max-h-[610px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Headquarters</h2>
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">Austria Office</h3>
          <p className="text-sm text-gray-400 mb-4">
            World Disaster Center is a non-profit organisation registered in
            Vienna, Austria with ZVR: 1671774845 and Steuernummer: 91 323/2005.
          </p>
          <p>Wolf-Dietrich-Straße 32/4/2</p>
          <p>5020 Salzburg</p>
          <p> Austria</p>
          <p className="mt-2 flex items-center gap-2">
            <FaPhoneAlt /> (+43) 6603984436
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope />
            <a
              href="mailto:office@worlddisastercenter.org"
              className="text-blue-400 hover:underline"
            >
              office@worlddisastercenter.org
            </a>
          </p>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">United States Office</h3>
          <p className="text-sm text-gray-400 mb-4">
            World Disaster Center is a trusted 501(c)(3) non-profit in New York,
            United States with EIN: 33-1869013.
          </p>
          <p>1660 Madison Avenue</p>
          <p>10029 New York</p>
          <p> United States</p>
          <p className="mt-2 flex items-center gap-2">
            <FaPhoneAlt /> (+1) 7185212743
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope />
            <a
              href="mailto:office@worlddisastercenter.org"
              className="text-blue-400 hover:underline"
            >
              office@worlddisastercenter.org
            </a>
          </p>
        </div>
        <hr className="my-6 border-gray-700" />
        <div>
          <h3 className="text-xl font-bold mb-2">Canada Office</h3>
          <p className="text-sm text-gray-400 mb-4">
            World Disaster Center is a non-profit organization in Ottawa, Canada
            with CRA: 721487825 RC 0001.
          </p>
          <p>586 Prince Albert St</p>
          <p>Ottawa, ON K1K1Y6</p>
          <p>Canada</p>
          <p className="mt-2 flex items-center gap-2">
            <FaPhoneAlt /> (+1) 8195130872
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope />
            <a
              href="mailto:office@worlddisastercenter.org"
              className="text-blue-400 hover:underline"
            >
              office@worlddisastercenter.org
            </a>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-gray-800 p-10 rounded-md shadow-lg relative min-h-[600px]">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Keep in Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                name="first_name"
                className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                name="last_name"
                className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              name="from_email"
              className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              name="message"
              className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-3 font-bold rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105">
              {pending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
