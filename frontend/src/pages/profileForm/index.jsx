import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { completeProfile } from "../../api/user";
import Heading from "../../components/Heading";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
// import { Button } from "@mui/material";
import { CheckBadgeIcon, PlusIcon, TrashIcon } from "@heroicons/react/20/solid";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import TagLine from "../../components/Tagline";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import skilltextraw from "../../constants/skills.txt";

function ProfileForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      image: null,
      file: null,
      address: "",
      state: "",
      town: "",
      number: "",
      dob: "",
      bio: "",
      country: "",
      profession: "",
      name: "",
      education: [],
      skills: [],
    },

    // validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      complete(values);
      //   //alert(JSON.stringify(values, null, 2));
      //   actions.resetForm();
    },
  });
  const [educ, setEduc] = useState({
    institution: "",
    degree: "",
    startYear: "",
    endYear: "",
  });
  const [skills, setSkills] = useState([
    "Data analysis",
    "Emergency Management",
    "Resource Management",
    "Risk Assessment and Mitigation",
    "Crisis Communication",
    "Leadership",
    "Quick Decision-Making",
    "Adaptability",
    "Stress Management",
    "Empathy and Cultural Sensitivity",
    "Physical Fitness",
    "Endurance",
  ]);
  const [currentskill, setCurrentSkill] = useState("");
  const [infoContact, setInfoContact] = useState({
    address: "",
    state: "",
    town: "",
    number: "",
    dob: "",
    bio: "",
    country: "",
    profession: "",
    name: "",
    education: [],
    skills: [],
  });

  const updateInfoContact = (new_value, ob_key) => {
    let new_info_contact = { ...infoContact, [ob_key]: new_value };
    setInfoContact(new_info_contact);
    setFieldValue(ob_key, new_value);
  };

  const listskillupdate = (new_skill) => {
    let new_c = { ...infoContact };
    // new_c.skills = infoContact?.skills || [];
    if (infoContact?.skills?.includes(new_skill.toLowerCase())) {
      let indexof = infoContact.skills.indexOf(new_skill.toLowerCase());
      new_c.skills.splice(indexof, 1);
      return setInfoContact(new_c);
    }

    new_c.skills?.push(new_skill.toLowerCase());
    setInfoContact(new_c);
    setFieldValue(skills, new_c.skills);

    // console.log(infoContact);
  };

  //   console.log(useParams());

  const complete = async () => {
    setLoading(true);
    const res = await completeProfile(values, id);

    if (res?.success) {
      setLoading(false);
      toast.success("Profile updated ! Welcome to World Disaster Center");
      navigate("/profile");
      //   console.log(res);
    } else {
      setLoading(false);
      console.log(res);
      toast.warn(res?.message || "Error");
      //   navigate("/signin");
      //   localStorage.removeItem("userAuth");
    }
  };

  //   const readFile = () => {
  //     fetch(skilltextraw)
  //       .then((r) => r.text())
  //       .then((text) => setSkills(text.split("\r\n")));
  //   };

  const updateEduc = (new_value, searchkey) => {
    const new_educ = { ...educ, [searchkey]: new_value };
    setEduc(new_educ);
  };

  const removeEducation = (index, e) => {
    e.preventDefault();
    const info_contact = { ...infoContact };
    info_contact?.education.splice(index, 1);
    setInfoContact(info_contact);
    setFieldValue("education", info_contact.skills);
  };

  const appendEducation = (e) => {
    e.preventDefault();
    if (
      educ.name === "" ||
      educ.startYear === "" ||
      educ.endYear === "" ||
      educ.degree === ""
    ) {
      return toast.warn(
        "fill all the required field ( institution, degree, start year and end year ) !"
      );
    }

    if (new Date(educ?.startYear).getTime() > new Date(educ?.endYear).getTime) {
      toast.warn("starting year and end year doesn't match");
    }
    let new_c = { ...infoContact };
    console.log(new_c);
    new_c.education.push(educ);
    setInfoContact(new_c);
    setEduc({
      institution: "",
      degree: "",
      startYear: "",
      endYear: "",
    });
    setFieldValue("education", new_c.education);
  };

  useEffect(() => {
    // readFile();
  }, []);

  return (
    <div className="mx-2">
      <br />
      <br />
      <Heading
        className=""
        title="Join the team"
        text="fill the form below to join us"
        tag="Career"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          complete();
        }}
        className="container border-2 border-gray-500 my-2 rounded-lg"
      >
        <div className="flex justify-center m-2">
          <Box
            border="2px dashed blue"
            style={{
              borderRadius: "100px",
              width: "200px",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            sx={{ p: 1 }}
          >
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              //maxFiles={3}
              onDrop={(acceptedFiles) =>
                acceptedFiles.map((file, index) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => {
                    setFieldValue("image", reader.result);
                    setFieldValue("file", reader.result);
                  };
                })
              }
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <Box
                  style={{
                    borderRadius: "100px",
                    width: "180px",
                    height: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  {...getRootProps()}
                  p="1rem"
                  sx={{
                    "&:hover": { cursor: "pointer" },
                    bgcolor: isDragActive ? "#cceffc" : "#0d053a97",
                  }}
                >
                  <input name="banner" {...getInputProps()} />
                  {isDragActive ? (
                    <div className="flex justify-center">
                      <p style={{ textAlign: "center" }}>
                        <CloudUploadIcon
                          sx={{ color: "primary.main", mr: 2 }}
                        />
                      </p>
                      <p
                        className="flex justify-center"
                        style={{ textAlign: "center", fontSize: "12px" }}
                      >
                        {" "}
                        Drop here!
                      </p>
                    </div>
                  ) : values.image === null ? (
                    <>
                      <p
                        className="flex justify-center"
                        style={{ textAlign: "center" }}
                      >
                        <CloudUploadIcon
                          sx={{ color: "primary.main", mr: 2 }}
                        />
                      </p>
                      <p style={{ textAlign: "center", fontSize: "12px" }}>
                        Drag and Drop here or click to choose
                      </p>
                    </>
                  ) : (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <img
                            style={{ maxWidth: "100px" }}
                            src={values.image}
                            alt=""
                          />
                        </Box>
                      </Box>
                    </>
                  )}
                </Box>
              )}
            </Dropzone>
          </Box>
        </div>
        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Full Name
            </label>
            <input
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 text-center focus:border-color-3"
              value={infoContact?.name}
              onChange={(e) => updateInfoContact(e.target.value, "name")}
              placeholder="your fullname"
              type="text"
              style={{ width: "100%" }}
              required
            />
          </div>
        </div>

        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Date of Birth{" "}
            </label>
            <input
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 text-center focus:border-color-3"
              value={infoContact?.dob}
              onChange={(e) => updateInfoContact(e.target.value, "dob")}
              placeholder="dd/mm/yy"
              type="date"
              style={{ width: "100%" }}
              required
            />
          </div>
        </div>

        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Contact (Phone number)
            </label>
            <input
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 text-center focus:border-color-3"
              value={infoContact?.contact}
              onChange={(e) => updateInfoContact(e.target.value, "contact")}
              placeholder="your phone number (with country code included)"
              type="text"
              style={{ width: "100%" }}
              required
            />
          </div>
        </div>

        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Bio{" "}
            </label>
            <textarea
              style={{ width: "100%" }}
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 focus:border-color-3"
              value={infoContact?.bio}
              onChange={(e) => updateInfoContact(e.target.value, "bio")}
              placeholder="Bio"
              type="text"
              required
            />
          </div>
        </div>

        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Country{" "}
            </label>
            <CountryDropdown
              style={{ width: "100%" }}
              value={infoContact?.country}
              onChange={(e) => updateInfoContact(e, "country")}
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 text focus:border-color-3 max-w-[200px]"
            />
          </div>
        </div>

        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              State{" "}
            </label>
            <RegionDropdown
              style={{ width: "100%" }}
              country={infoContact?.country}
              value={infoContact?.state}
              onChange={(e) => updateInfoContact(e, "state")}
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 text focus:border-color-3 max-w-[200px]"
            />
          </div>
        </div>

        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              City{" "}
            </label>
            <input
              style={{ width: "100%" }}
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11  focus:border-color-3"
              value={infoContact?.town}
              onChange={(e) => updateInfoContact(e.target.value, "town")}
              placeholder="City / Town"
              type=""
              required
            />
          </div>
        </div>
        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Address{" "}
            </label>
            <input
              style={{ width: "100%" }}
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 focus:border-color-3"
              value={infoContact?.address}
              onChange={(e) => updateInfoContact(e.target.value, "address")}
              placeholder="Your Address"
              type="text"
              required
            />
          </div>
        </div>
        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Profession{" "}
            </label>
            <input
              style={{ width: "100%" }}
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 focus:border-color-3"
              value={infoContact?.profession}
              onChange={(e) => updateInfoContact(e.target.value, "profession")}
              placeholder="Your Profession"
              type="text"
              required
            />
          </div>
        </div>
        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Skills{" "}
            </label>
            <textarea
              className="px-3 w-[100%] py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 focus:border-color-3"
              value={infoContact?.skills?.join(", ")}
              style={{ width: "100%", minHeight: "80px" }}
              onChange={() => null}
              placeholder="Your Skills"
              type="text"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {skills.map((sk) => {
            return (
              <div
                className={` ${
                  infoContact?.skills?.includes(sk.toLowerCase())
                    ? "bg-[#28694950]"
                    : "bg-transparent"
                } whitespace-nowrap rounded-md border-solid border-2 border-gray-700 px-2 py-2 my-1 text-gray-400 cursor-pointer hover:text-gray-100 `}
                key={sk}
                onClick={() => listskillupdate(sk)}
              >
                {sk}
              </div>
            );
          })}
        </div>
        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Education{" "}
            </label>
          </div>
          <div>
            <input
              placeholder="Institution Name"
              value={educ.institution}
              onChange={(e) => updateEduc(e.target.value, "institution")}
              className="px-3 w-[100%] py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 focus:border-color-3"
            />
            <input
              placeholder="Degree / Field of Study"
              value={educ.degree}
              onChange={(e) => updateEduc(e.target.value, "degree")}
              className="px-3 w-[100%] py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 focus:border-color-3"
            />
            <div className="flex">
              <input
                placeholder="start year"
                value={educ.startYear}
                onChange={(e) => updateEduc(e.target.value, "startYear")}
                type="date"
                className="px-3 w-[100%] py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 focus:border-color-3"
              />
              <input
                placeholder="end year"
                type="date"
                value={educ.endYear}
                onChange={(e) => updateEduc(e.target.value, "endYear")}
                className="px-3 w-[100%] py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 focus:border-color-3"
              />
            </div>
            <div className="d-flex justify-center">
              <button
                onClick={(e) => appendEducation(e)}
                className="whitespace-nowrap bg-[#000000] text-white rounded-lg flex px-5 py-2 font-bold"
              >
                Add Education
                <PlusIcon style={{ width: "20px" }} />
              </button>
            </div>
          </div>
        </div>
        <div>
          {infoContact?.education?.map((item, indx) => {
            return (
              <div
                className="flex justify-between border-2 p-5 rounded-md border-color-1 my-3"
                key={item.institution}
              >
                <div>
                  <TagLine className="">
                    Instiution - {item?.institution}
                  </TagLine>
                  <TagLine className="">Degree - {item?.degree}</TagLine>
                  <TagLine className="">
                    {item?.startYear} - {item?.endYear}
                  </TagLine>
                </div>
                <div>
                  <button
                    className="whitespace-nowrap bg-red-800 text-white rounded-lg flex px-5 py-2 "
                    color="danger"
                    onClick={(e) => removeEducation(indx, e)}
                  >
                    <TrashIcon style={{ width: "20px", height: "25px" }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center m-2">
          <button
            className="whitespace-nowrap bg-green-700 text-white rounded-lg flex px-5 py-2 items-center"
            color="danger"
            type="submit"
            disabled={loading}
          >
            <span className="font-bold">Submit</span>
            <CheckBadgeIcon style={{ width: "30px", height: "35px" }} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
