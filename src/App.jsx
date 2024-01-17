import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import { useState } from "react";
import axios from "axios";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.stackexchange.com/2.3/search`,
        {
          params: {
            order: "desc",
            sort: "activity",
            site: "stackoverflow",
            filter: "withbody",
            intitle: query,
          },
        }
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  return (
    <>
      <Router>
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home searchResults={searchResults} />} />
          <Route path="/question/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
