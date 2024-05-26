import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, profile } from "../../api/user";
import { toast } from "react-toastify";
import Button from "../../components/Button";

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);

  const myprofile = async () => {
    const res = await profile();
    if (res?.success) {
      //   console.log(res);
      setUser(res.user);
    } else {
      toast.warn("Redirected to home page ! check your network");
      navigate("/signin");
    }
  };

  const LogingOut = async () => {
    const res = await logout();

    if (res?.success) {
      toast.success("you'are logged out");
      navigate("/");
      localStorage.removeItem("userAuth");
    } else {
      toast.warn("Error");
    }
  };

  useEffect(() => {
    // navigate("");
    myprofile();
  }, []);

  return (
    <div>
      <br />
      <br />

      <div className="flex justify-center">
        {user?.role === "admin" || user?.role === "dev" ? (
          <Button
            className="m-4"
            href="/management/wdc/worddisastercenter/admin"
          >
            Admin
          </Button>
        ) : null}
      </div>

      <div className="flex flex-wrap m-2 justify-center">
        <input
          className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11"
          disabled={!edit}
          value={user?.name}
          placeholder=""
        />
        <input
          className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11"
          disabled={!edit}
          value={user?.email}
          placeholder=""
        />
        {/* <input disabled={!edit} value={user?.name} placeholder=""/> */}
      </div>

      <div className="flex justify-center">
        <Button onClick={LogingOut}>Logout</Button>
      </div>
    </div>
  );
}

export default ProfilePage;
