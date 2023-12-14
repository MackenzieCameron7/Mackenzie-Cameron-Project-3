import "./App.css";
import CreateUser from "./pages/CreateUser";
import GroceriesApp from "./pages/GroceriesApp";
import LoginUser from "./pages/LoginUser";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginUser /> } />
          <Route path="/main" element={<GroceriesApp /> } />
          <Route path="/create-user" element={<CreateUser /> } />
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
