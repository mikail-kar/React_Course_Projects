import React from "react";
import { Container } from "reactstrap";
import Header from "./components/navi/Header";
import Dashboard from "./components/root/Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "./components/navi/CartDetail";


function App() {
return (
<Container>
<Header />
<Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/cart" element={<CartDetail />} />

<Route path="*" element={<h1>Not Found</h1>} />
</Routes>
</Container>
);
}


export default App;