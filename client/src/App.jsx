import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      {/* LANDING PAGE */}
      <Route path="/" element={<Landing />} />

      {/* USERS PAGES */}

      {/* REPRESENTATIVE PAGES */}

      {/* ADMIN PAGES */}
    </Routes>
  );
}

export default App;