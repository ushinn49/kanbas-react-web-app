import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Labs from "./Labs";
import Kambaz from "./Kambaz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kambaz/*" element={<Kambaz />} />
      </Routes>
    </Router>
  );
}

export default App;