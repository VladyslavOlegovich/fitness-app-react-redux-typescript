import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Home from "./components/Home/Home";
import WorkoutJournal from "./components/WorkoutJournal/WorkoutJournal";
import WorkoutPlans from "./components/WorkoutPlans/WorkoutPlans";
import Nutrition from "./components/Nutrition/Nutrition";
import Progress from "./components/Progress/Progress";
function App() {
  return (
    <Router>
      <div>
        <MainMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<WorkoutJournal />} />
          <Route path="/plans" element={<WorkoutPlans />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
