import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Signin from "./Signin";
import Member from "./Member";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/*" element={<Navigate to="/" />} />
        {/* <Route path="/member" element={<Member />} /> */}
      </Routes>
      <button
        id="goto_top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        top
      </button>
    </>
  );
}
