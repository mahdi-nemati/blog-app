import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
