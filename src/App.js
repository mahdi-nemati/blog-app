import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
