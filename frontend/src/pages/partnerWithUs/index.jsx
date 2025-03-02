import { useRef, useState } from "react";
import { toast } from "react-toastify";
import client from "../../api/client";
export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organizationName: "",
    organizationWebsite: "",
    partnershipInterests: "",
    message: "",
  });
  const [pending, setPending] = useState(false);
  const form = useRef();

  const classes = {
    label: "block text-sm font-medium text-gray-300",
    inputField:
      "mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white",
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.organizationName || !formData.partnershipInterests) {
      toast.error("First Name, Last Name, and Email are required fields.", {
        theme: "dark",
      });
      return false;
    }
    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    client.post("/api/organization/create", formData)
      .then((res) => {
        setPending(false);
        if (res.data.success) {
          toast.success(res.data.message, { theme: "dark" });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            organizationName: "",
            organizationWebsite: "",
            partnershipInterests: "",
            message: "",
          });
        } else {
          toast.error(res.data.message, { theme: "dark" });
        }
      })
      .catch((err) => {
        setPending(false);
        toast.error(err.message, { theme: "dark" });
      });
  };

  return (
    <div className="justify-center items-center flex flex-col p-8 mt-10 mx-28">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">
        Partner With WDC
      </h1>
      <div className="w-full lg:w-1/2 bg-gray-800 p-10 rounded-md shadow-lg">
        <form ref={form} onSubmit={submitForm}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={`${classes.label}`}>
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                name="first_name"
                className={`${classes.inputField}`}
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className={`${classes.label}`}>
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                name="last_name"
                className={`${classes.inputField}`}
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={`${classes.label}`}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.email}
                name="from_email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`${classes.inputField}`}
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className={`${classes.label}`}>
                Company <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, organizationName: e.target.value })
                }
                name="company"
                className={`${classes.inputField}`}
                type="text"
                placeholder="Your Company"
                required
              />
            </div>
            <div>
              <label className={`${classes.label}`}>
              Organization Website (Optional) <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, organizationWebsite: e.target.value })
                }
                name="company"
                className={`${classes.inputField}`}
                type="text"
                placeholder="Your Website"
              />
            </div>
            <div>
              <label className={`${classes.label}`}>
              Partnership Interests <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, partnershipInterests: e.target.value })
                }
                name="company"
                className={`${classes.inputField}`}
                type="text"
                placeholder="Your Interests With WDC"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className={`${classes.label}`}>Message</label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              name="message"
              className={`${classes.inputField}`}
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