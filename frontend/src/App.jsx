import "./App.css";
import GroceriesApp from "./pages/GroceriesApp";
import { BowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BowserRouter>
        <Routes>
          <Route path="/main" element={<GroceriesApp />}/>
        </Routes>
      </BowserRouter>  
    </>
  );
}

export default App;
