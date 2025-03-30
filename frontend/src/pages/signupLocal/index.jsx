import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { sendVerificationCode, signupLocal } from "../../api/user";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sentVerificationCode, setSentVerificationCode] = useState(false);
  const [code, setCode] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const handleSignupLocal = async (e) => {
    e.preventDefault();
    try{
      if (!code || !phoneNumber || !firstName || !lastName) {
        toast.warn("Fill all the required field first");
      }
      setPending(true);
      await signupLocal({ firstName, lastName, phoneNumber, code });
      toast.success("Successfully Signed Up");
      navigate("/");
    } catch (e) {
      toast.error("Error Siggning Up");
    } finally {
      setPending(false)
    }
  };
  const handleSendVerificationCode = async (e) => {
    e.preventDefault();
    try {
      if (!phoneNumber || !firstName || !lastName) {
        toast.warn("Fill all the required field first");
      }
      setPending(true);
      const res = await sendVerificationCode(phoneNumber);
      toast.success(res.data.message);
      setSentVerificationCode(true);
    } catch (e) {
      toast.error(e.response.data.message);
    } finally {
      setPending(false);
    }
  };
  return (
    <div className="m-4">
      <br />
      <br />
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-blue-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-green-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl text-center font-bold text-white mb-6">
          Register Local
        </h2>
        
        <form onSubmit={handleSignupLocal}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="name"
            >
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              name="name"
              type="text"
              required
            />
          </div>         
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="name"
            >
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              name="name"
              id="email"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="name"
            >
              Phone Number
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              required
            />
          </div>

          {sentVerificationCode && <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="confirmpassword"
            >
              Verifiaction Code
            </label>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              rows="3"
              name="verificationCode"
              type="text"
              id="bio"
              maxLength={6}
              required
            ></input>
          </div>}

          {!sentVerificationCode ? <div className="flex justify-center">
            <button
              disabled={pending}
              className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              onClick={handleSendVerificationCode}
            >
              {!pending ? "Sign Up" : "..."}
            </button>
          </div> :
          <div className="flex justify-center">
            <button
              disabled={pending}
              className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              onClick={handleSignupLocal}
            >
              {!pending ? "Sign Up" : "..."}
            </button>
          </div>}
          <div className="text-center m-2">
            <span>Already have an account ? </span>{" "}
            <Link className="underline text-center" to="/signinLocal">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
