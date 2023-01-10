import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Results from "./components/views/Results/Results";
import Survey from "./components/views/Survey/Survey";
import "./App.css";
import Error404 from "./components/views/Error404/Error404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/results/:id" element={<Results />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
