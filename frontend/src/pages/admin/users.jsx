import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/user";
import { toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dateFormat from "dateformat";
import { styled } from "@mui/material/styles";
import { EyeIcon } from "@heroicons/react/20/solid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Chip } from "@mui/material";
import TagLine from "../../components/Tagline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({});

  const handleOpen = (user_id) => {
    setOpen(true);
    setUser(users.filter((sgl) => sgl._id === user_id)[0]);
  };
  const handleClose = () => setOpen(false);

  function createData(id, name, email, role, completed, birthday, contact) {
    return {
      id,
      name,
      email,
      role,
      completed: completed.toString(),
      birthday: dateFormat(Date(birthday), "dd/mm/yyyy"),
      contact,
    };
  }

  const fetchingUsers = async () => {
    try {
      const res = await getAllUsers();
      setLoading(true);
      if (res?.success) {
        setUsers(res.users);
        setLoading(false);
        setRows(
          res.users.map((s_u) =>
            createData(
              s_u?._id,
              s_u?.name,
              s_u?.email,
              s_u?.role,
              s_u?.profileCompleted,
              s_u?.dob,
              s_u?.contact
            )
          )
        );
        // console.log(res.users);
      } else {
        toast.warn("Error while fetching users");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        "Check your network and try again! if the error persist try to login again in your account"
      );
    }
  };

  useEffect(() => {
    fetchingUsers();
  }, []);

  return (
    <div>
      <div style={{ margin: "8px" }}>
        <Button
          onClick={() => toast("Feature! Coming soon")}
          variant="outlined"
        >
          Filter
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Users">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">name</StyledTableCell>
              <StyledTableCell align="center">email</StyledTableCell>
              <StyledTableCell align="center">role</StyledTableCell>
              <StyledTableCell align="center">completed</StyledTableCell>
              <StyledTableCell align="center">birthday</StyledTableCell>
              <StyledTableCell align="center">contact</StyledTableCell>
              <StyledTableCell align="center">view</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.role}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.completed}
                </StyledTableCell>
                <StyledTableCell align="center">{row.birthday}</StyledTableCell>
                <StyledTableCell align="center">{row.contact}</StyledTableCell>
                <StyledTableCell
                  className="hover:scale-90 hover:bg-color-2 "
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  align="center"
                  onClick={() => handleOpen(row.id)}
                >
                  <EyeIcon style={{ width: "20px", height: "20px" }} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {(user?.type === "individual" ||
            user?.type === undefined ||
            user?.type === "normal") && (
            <div>
              <div className="flex justify-center">
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "150px",
                    objectFit: "cover",
                  }}
                  src={user?.imgUrl}
                />
              </div>
              <TagLine className="text-black" style={{ color: "black" }}>
                ID: {user?._id}
              </TagLine>

              <hr style={{ color: "black" }} />
              <br />
              <div style={{ color: "black" }}>
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
            <div style={{ color: "black" }}>
              <div className="flex justify-center">
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "150px",
                    objectFit: "cover",
                  }}
                  src={user?.imgUrl}
                />
              </div>
              <br />
              <ul>
                <li className="">
                  <b>Company Name: </b> {user?.name}
                </li>
                <li className="">
                  <b>Mission: </b> {user?.mission}
                </li>
                <li className="">
                  <b>Start Date: </b>{" "}
                  {dateFormat(Date(user?.startDate, "dd-mm-yyyy"))}
                </li>
                <li className="">
                  <b>Country: </b> {user?.country}
                </li>
                <li className="">
                  <b>States: </b> {user?.state}
                </li>
                <li className="">
                  <b>address: </b> {user?.address}
                </li>
                <li className="">
                  <b>website: </b> <a href={user?.address}>{user?.address}</a>
                </li>
                <li>
                  <b>Sectors : </b>{" "}
                  {user?.domain?.map((sgl) => (
                    <Chip
                      key={sgl}
                      style={{ margin: "2px", color: "black" }}
                      label={sgl}
                      variant="outlined"
                    />
                  ))}{" "}
                  <br />
                </li>
              </ul>
            </div>
          )}
          {user?.type === "npo" && (
            <div style={{ color: "black" }}>
              <div className="flex justify-center">
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "150px",
                    objectFit: "cover",
                  }}
                  src={user?.imgUrl}
                />
              </div>
              <br />
              <ul>
                <li className="">
                  <b>Company Name: </b> {user?.name}
                </li>
                <li className="">
                  <b>Mission: </b> {user?.mission}
                </li>
                <li className="">
                  <b>Start Date: </b>{" "}
                  {dateFormat(Date(user?.startDate, "dd-mm-yyyy"))}
                </li>
                <li className="">
                  <b>Country: </b> {user?.country}
                </li>
                <li className="">
                  <b>States: </b> {user?.state}
                </li>
                <li className="">
                  <b>address: </b> {user?.address}
                </li>
                <li className="">
                  <b>website: </b> <a href={user?.address}>{user?.address}</a>
                </li>
                <li>
                  <b>skills : </b>{" "}
                  {user?.domain?.map((sgl) => (
                    <Chip
                      key={sgl}
                      style={{ margin: "2px", color: "black" }}
                      label={sgl}
                      variant="outlined"
                    />
                  ))}{" "}
                  <br />
                </li>
              </ul>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default AdminUsers;
