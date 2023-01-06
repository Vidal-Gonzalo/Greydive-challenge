import { Route, Routes } from "react-router-dom";
import Results from "./components/views/Results/Results";
import Survey from "./components/views/Survey/Survey";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/results/:id" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
