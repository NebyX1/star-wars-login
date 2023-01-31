import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharacterDescription } from "./views/personajedescription.js";
import { VehicleDescription } from "./views/vehicledescription.js";
import { PlanetDescription } from "./views/planetdescription.js";
import { LoginForm } from "./views/login"
import { Register } from "./views/register";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/login" element={<LoginForm />} />
						<Route path="/register" element={<Register />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/personaje/detalles/:id" element={<CharacterDescription />} />
						<Route path="/planeta/detalles/:id" element={<PlanetDescription />} />
						<Route path="/vehicle/detalles/:id" element={<VehicleDescription />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
