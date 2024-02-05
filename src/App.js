import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList'
import Recommendation from "./components/Recommendation";
import "./App.css";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/recommendation/:id" element={<Recommendation />} />
        </Routes>
      </Router>
    );
}

export default App;

