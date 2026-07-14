import React from "react";
import { Routes, Route } from "react-router-dom";

import AdmissionForm from "../Pages/AdmissionForm";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Classes from "../Pages/Classes";
import Gallery from "../Pages/Gallery";
import StudentDashboard from "../Pages/StudentDashboard";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";

function AppRoutes() {
  return (

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/classes" element={<Classes />} />

<Route path="/gallery" element={<Gallery />} />

<Route
path="/student-dashboard"
element={<StudentDashboard />}
/>

<Route path="/contact" element={<Contact />} />

<Route path="/login" element={<Login />} />
<Route path="/admission" element={<AdmissionForm />} />

</Routes>

  );
}

export default AppRoutes;