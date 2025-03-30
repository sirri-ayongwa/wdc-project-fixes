import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { signinProfessional } from "../../api/user";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();


  const HandleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) {
        toast.warn("Fill all the required field first");
      }
      setPending(true)
      const res = await signinProfessional({ email, password });
      toast.success(res.data.message);
      navigate("/");
    } catch (e) {
      toast.error(e.response.data.message);
    } finally {
      setPending(false)
    }

  };

  return (
    <div className="m-4">
      <br />
      <br />
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-green-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-blue-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Login
        </h2>

        <form onSubmit={HandleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="email"
            >
              Email Address
            </label>
            {/* <div> */}

            {/* <input */}
            {/*   value={email} */}
            {/*   onChange={(e) => setEmail(e.target.value)} */}
            {/*   className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" */}
            {/*   name="email" */}
            {/*   id="email" */}
            {/*   type="email" */}
            {/*   required */}
            {/*   /> */}
            {/*   <Button>Send email verification</Button> */}
            {/*   </div> */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              name="email"
              id="email"
              type="email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              rows="3"
              name="password"
              type="password"
              id="bio"
              required
            ></input>
          </div>

          <div className="flex justify-center">
            <button
              disabled={pending}
              className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              {!pending ? "Sign In" : "..."}
            </button>
          </div>

          <div className="text-center m-2">
            <span>Don't have an account ? </span>{" "}
            <Link className="underline text-center" to="/signup">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
