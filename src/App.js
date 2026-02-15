import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/recruiter/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard recruiterId="recruiter123" />} />
      </Routes>
    </Router>
  );
}

export default App;
