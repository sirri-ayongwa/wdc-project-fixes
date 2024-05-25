import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home";
import NotfoundPage from "./pages/notfound";
import { Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      {/* <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="*" element={<NotfoundPage/>}/>
      </Routes> */}
    </>
  );
}

export default App;
