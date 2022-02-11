import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import CompleteForm from "./pages/CompleteForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete-form" element={<CompleteForm />} />
      </Routes>
    </Router>
  );
}

export default App;
