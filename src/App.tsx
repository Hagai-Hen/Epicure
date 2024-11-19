import { Navbar } from "./Component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rest" element={<h1>Restaurant Page</h1>} />
        <Route path="/desc/:name" element={<h1>Restaurant Page</h1>} />
      </Routes>
    </>
  )
}

export default App;
