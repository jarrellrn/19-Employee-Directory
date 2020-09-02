import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import EmployeeTable from "./components/EmployeeTable.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <EmployeeTable />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
