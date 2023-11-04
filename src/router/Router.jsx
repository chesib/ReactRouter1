import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";

export const Router = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
};
