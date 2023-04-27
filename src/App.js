import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/signIn"
import UserLayout from "./Component/UserLayout"
import SignUp from "./Component/SignUp"
import Dashboard from "./Component/Dashboard"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
