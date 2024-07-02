import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, profile } from "../../api/user";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import EmptyImage from "../../assets/images/empty-img.jpg";

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);
  const auth = JSON.parse(localStorage.getItem("userAuth"));

  const myprofile = async () => {
    const res = await profile(auth.id);
    if (res?.success) {
      //   console.log(res);
      setUser(res.user);
    } else {
      toast.warn("Redirected to home page ! check your network - go");
      navigate("/signin");
      localStorage.removeItem("userAuth");
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
        <img
          src={user?.imgUrl || EmptyImage}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "300px",
          }}
          alt="empty profile image"
        />
      </div>
      <div className="flex justify-center my-8 ">
        <p className="text-color-1">~ {user?.bio || "No Bio available"} ~</p>
      </div>

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
          className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 text-center"
          disabled={!edit}
          value={user?.name}
          placeholder=""
        />
        <input
          className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 text-center"
          disabled={!edit}
          value={user?.email}
          placeholder=""
        />
        {/* <input disabled={!edit} value={user?.name} placeholder=""/> */}
      </div>

      {user?.profileCompleted === false ? (
        <div className="flex flex-1 justify-center">
          <Button className="m-4" href={`/profile/complete/${user?._id}`}>
            <span className="text-lg">Complete Registration</span>
          </Button>
        </div>
      ) : (
        <></>
      )}

      <div className="flex justify-center">
        <p
          className="underline text-color-2 font-semibold my-4 cursor-pointer"
          onClick={LogingOut}
        >
          Logout
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;
