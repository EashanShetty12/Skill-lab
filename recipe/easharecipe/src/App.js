import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import NoPage from "./components/Nopages";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
