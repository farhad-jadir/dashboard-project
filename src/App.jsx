import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";
import Incidents from "./pages/Incidents";
import Locations from "./pages/Locations";
import Activities from "./pages/Activities";
import Documents from "./pages/Documents";
import CypherAI from "./pages/CypherAI";
import NewIncidents from "./SubPages/NewIncidents"; 
import GetStarted from "./SubPages/GetStarted"; 
import NextStep from "./SubPages/NextStep";
import Finished from "./SubPages/Finished";// 
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Incidents/*" element={<Incidents />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Documents" element={<Documents />} />
          <Route path="/CypherAI" element={<CypherAI />} />
          <Route path="/NewIncidents" element={<NewIncidents />} /> 
          <Route path="/GetStarted" element={<GetStarted />} /> 
          <Route path="/NextStep" element={<NextStep />} />
          <Route path="/Finished" element={<Finished />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
