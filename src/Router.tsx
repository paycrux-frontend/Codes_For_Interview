import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { MassiveImage } from "./pages";
import { Landing } from "./pages/Landing";
import { Refactor } from "./pages/Refactor";
import NavOutlet from "./components/NavOutlet";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<NavOutlet />}>
          <Route path="/refactor" element={<Refactor />} />
          <Route path="/massive-image" element={<MassiveImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
