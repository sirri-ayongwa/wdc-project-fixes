import { ArrowRightAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TypePage() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { id } = useParams();

  return (
    <div
      style={{
        minHeight: "600px",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div className=" list-item items-center  m-2 justify-start align-middle ">
          <div className="flex items-center gap-4">
            <label className="text-xl text-gray-300 whitespace-nowrap">
              Profile Type
            </label>
            <select
              className="px-3 py-2 m-2 rounded-lg border-solid border-2 border-color-1 bg-n-11 text-center focus:border-color-3"
              type="text"
              style={{ width: "100%" }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            >
              <option value="">Choose</option>
              <option value="individual">INDIVIDUAL</option>
              <option value="enterprise">ENTERPRISE</option>
              <option value="npo">NON PROFIT ORGANISATION</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => navigate(`/profile/${value}/complete/${id}`)}
            variant="outlined"
            disabled={value !== "individual" && value !== "enterprise" && value !== "npo"}
          >
            Continue {">"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TypePage;
