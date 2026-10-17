
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/MonirEnterprise/erp/Dashboard";
import MonirEnterprise from "./pages/MonirEnterprise/MonirEnterprise";
import MonirAcademy from "./pages/MonirAcademy/MonirAcademy";
import MonirFriendAssociation from "./pages/MonirFriendAssociation/MonirFriendAssociation";
import AgriculturalTrading from "./pages/AgriculruralTrading/Agriculturaltrading";
import Login from "./pages/MonirEnterprise/erp/Login";

function App() {
  return (
    <Routes>
      {/* MONIR GROUP */}
      <Route path="/" element={<Home />} />

      {/* ORGANIZATIONS */}
      <Route
        path="/m-s-monir-enterprise"
        element={<MonirEnterprise />}
      />
      <Route
        path="/m-s-monir-enterprise/erp/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/monir-academy"
        element={<MonirAcademy />}
      />
      <Route
        path="/m-s-monir-enterprise/login"
        element={<Login />}
      />
      <Route
        path="/monir-friend-association"
        element={<MonirFriendAssociation />}
      />

      {/* AGRICULTURAL TRADING ERP */}
      <Route
        path="/agricultural-trading"
        element={<AgriculturalTrading />}
      />
    </Routes>
  );
}

export default App;
