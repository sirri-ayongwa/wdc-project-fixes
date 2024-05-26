import React from "react";
import "./style.css";
import Button from "../../components/Button";

function NotfoundPage() {
  return (
    <div className="m-7">
      <br />
      <br />
      <h1 className="text-center">Page not found</h1>
      <br />
      <div className="flex justify-center">
        <Button href="/">404</Button>
      </div>
    </div>
  );
}

export default NotfoundPage;
