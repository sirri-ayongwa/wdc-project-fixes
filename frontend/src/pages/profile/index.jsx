import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, profile } from "../../api/user";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import EmptyImage from "../../assets/images/empty-img.jpg";
import TagLine from "../../components/Tagline";
import { Chip } from "@mui/material";
import dateFormat from "dateformat";

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
        <p className="text-color-1">
          ~ {user?.bio || user?.description || "No Bio available"} ~
        </p>
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
          <Button className="m-4" href={`/profile/type/${user?._id}`}>
            <span className="text-lg">Complete Registration</span>
          </Button>
        </div>
      ) : (
        <div>
          <div className="grid justify-center">
            <h4>
              <b>Type: </b> {user?.type?.toUpperCase()}
            </h4>
            {user?.type === "individual" && (
              <div>
                <TagLine className="">ID: {user?._id}</TagLine>

                <hr style={{ color: "white" }} />
                <br />
                <div style={{ color: "white" }}>
                  <b>Name : </b> {user?.name} <br />
                  <b>Email : </b> {user?.email} <br />
                  <b>bio : </b> {user?.bio} <br />
                  <b>contact : </b> {user?.contact} <br />
                  <b>Birthday : </b> {dateFormat(Date(user?.dob), "dd-mm-yyyy")}{" "}
                  <br />
                  <b>country : </b> {user?.country} <br />
                  <b>state : </b> {user?.state} <br />
                  <b>town : </b> {user?.town} <br />
                  <b>address : </b> {user?.address} <br />
                  <b>role : </b> {user?.role} <br />
                  <b>type : </b> {user?.type} <br />
                  <b>profession : </b> {user?.profession} <br />
                  <b>skills : </b>{" "}
                  {user?.skills?.map((sgl) => (
                    <Chip
                      key={sgl}
                      style={{ margin: "2px" }}
                      label={sgl}
                      variant="outlined"
                    />
                  ))}{" "}
                  <br />
                  <div
                    style={{
                      margin: "2px",
                      padding: "6px",
                      boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    }}
                  >
                    {user?.education?.map((sgl) => (
                      <ul key={sgl?._id}>
                        <li>
                          <b>Institution: </b>
                          {sgl.institution}
                        </li>
                        <li>
                          <b>Degree: </b>
                          {sgl.degree}
                        </li>
                        <li>
                          <b>Start: </b>
                          {dateFormat(Date(user?.startYear, "dd-mm-yyyy"))}
                        </li>
                        <li>
                          <b>End: </b>
                          {dateFormat(Date(user?.endYear, "dd-mm-yyyy"))}
                        </li>
                      </ul>
                    ))}
                  </div>
                  {/* <b>education : </b> {user?.education} <br /> */}
                </div>
              </div>
            )}
            {user?.type === "enterprise" && (
              <div>
                <TagLine className="">
                  <b>Company Name: </b> {user?.name}
                </TagLine>
                <TagLine className="">
                  <b>Mission: </b> {user?.mission}
                </TagLine>
                <TagLine className="">
                  <b>Start Date: </b>{" "}
                  {dateFormat(Date(user?.startDate, "dd-mm-yyyy"))}
                </TagLine>
                <TagLine className="">
                  <b>Country: </b> {user?.country}
                </TagLine>
                <TagLine className="">
                  <b>States: </b> {user?.state}
                </TagLine>
                <TagLine className="">
                  <b>address: </b> {user?.address}
                </TagLine>
                <TagLine className="">
                  <b>website: </b> <a href={user?.address}>{user?.address}</a>
                </TagLine>
                <div>
                  <b>Sectors : </b>{" "}
                  {user?.domain?.map((sgl) => (
                    <Chip
                      key={sgl}
                      style={{ margin: "2px", color: "white" }}
                      label={sgl}
                      variant="outlined"
                    />
                  ))}{" "}
                  <br />
                </div>
              </div>
            )}
            {user?.type === "npo" && (
              <div>
                <TagLine className="">
                  <b>Company Name: </b> {user?.name}
                </TagLine>
                <TagLine className="">
                  <b>Mission: </b> {user?.mission}
                </TagLine>
                <TagLine className="">
                  <b>Start Date: </b>{" "}
                  {dateFormat(Date(user?.startDate, "dd-mm-yyyy"))}
                </TagLine>
                <TagLine className="">
                  <b>Country: </b> {user?.country}
                </TagLine>
                <TagLine className="">
                  <b>States: </b> {user?.state}
                </TagLine>
                <TagLine className="">
                  <b>address: </b> {user?.address}
                </TagLine>
                <TagLine className="">
                  <b>website: </b> <a href={user?.address}>{user?.address}</a>
                </TagLine>
                <div>
                  <b>skills : </b>{" "}
                  {user?.domain?.map((sgl) => (
                    <Chip
                      key={sgl}
                      style={{ margin: "2px", color: "white" }}
                      label={sgl}
                      variant="outlined"
                    />
                  ))}{" "}
                  <br />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-1 justify-center">
            <Button className="m-4" href={`/profile/type/${user?._id}`}>
              <span className="text-lg">Update Profile</span>
            </Button>
          </div>
        </div>
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
