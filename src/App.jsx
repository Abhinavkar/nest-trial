import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Connections from "./components/Connections/Connections";
import Achievements from "./components/Achievements/Achievements";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navigation from "./components/Navigation/Navigation";
import GlobalContext from "./components/Context/GloablContext";
import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import Profile from "./components/Profile/Profile";
import eventData from './Data/eventData';
import profileData from './Data/profileData';
import connectionsData from './Data/connectionData';
import ProductList from './components/conn/productList';
import ProductState from './components/conn/ProductState';
import Product  from './components/conn/product';
import DocumentUpload from './pages/DocumentUpload/DocumentUpload';


const App = () => {
	AOS.init();
	const location = useLocation();
	const { openNav, setOpenNav, setIsAuthenticated, breakpoint } =
		useContext(GlobalContext);
	useEffect(() => {
		let isLocalAuthenticated = localStorage.getItem("isAuthenticated");
		if (isLocalAuthenticated)
			setIsAuthenticated(JSON.parse(isLocalAuthenticated));
		else setIsAuthenticated(true);
	}, [breakpoint, setIsAuthenticated]);
	return (
		<>
			{location.pathname !== "/" &&
				location.pathname !== "/login" &&
				location.pathname !== "/register"&&
				location.pathname !=="/connections" &&
				location.pathname !== "/upload" ? (
				<>
					<Navigation />
					<Header />
					<main className="main"
						style={{
							left: breakpoint("mobile")
								? 0
								: openNav
									? "var(--side-width)"
									: "7.5rem",
							width: breakpoint("mobile")
								? "100vw"
								: openNav
									? "calc(100vw - var(--side-width))"
									: "calc(100vw - 7.5rem)",
						}}>
						<ProductState>
							<Routes>
								<Route path="/dashboard"
									element={
										<Dashboard />
									} />
								<Route path="/achievements"
									element={
										<Achievements />
									} />
								<Route path="/productlist" element={<ProductList/>}/>	
								<Route path="/product" element={<Product/>}/>	

								<Route
									path="/productlist"
									elements={
									<Connections />
							
								}/> 
								<Route
									path="/events"
									element={eventData.map(eventData => (
										<Events
											image={eventData.image}
											name={eventData.name}
											desc={eventData.desc}
										/>
									))}
								/>
								<Route
									path="/profile"
									element={profileData.map(profileData => (
										<Profile
											image={profileData.image}
											name={profileData.name}
											status={profileData.status}
											desgination={profileData.desgination}
											phone={profileData.phone}
											currentOrganization={profileData.currentOrganization}
											dob={profileData.dob}
											gender={profileData.gender}
											username={profileData.username}
											batch={profileData.batch}
										/>
									))}
								/>
							</Routes>
						</ProductState>
					</main>
				</>
			) : (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/upload" element={<DocumentUpload />} /> 
				</Routes>
			)}
		</>
	);
};

export default App;
