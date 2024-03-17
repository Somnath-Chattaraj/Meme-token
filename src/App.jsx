import { Routes, Route } from "react-router-dom";
import Home from "./home";
import BrownPaper from "./brownPaper";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brown-paper"  element={<BrownPaper />} />
      </Routes>
    </>
  );
}
