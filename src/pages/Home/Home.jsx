import React from "react";
import "./home.css";
import waves from "../../images/wave.svg";
import homeBg from "../../images/home-bg.jpeg"
import Button from "../../components/Button/Button";

const Home = () => {
	return (
		<section
			className="home"
			style={{
				backgroundImage: `url(${homeBg})`,
			}}
		>
			<div className="home-title">
				<span data-aos="fade-left" data-aos-duration="1000">
					Alumni
				</span>
				<span data-aos="fade-left" data-aos-duration="1000">
					Nest
				</span>
			</div>
			<div
				className="home-cover"
				style={{
					backgroundImage: `url(${waves})`,
				}}
			>
				<div
					className="home-cover-nav"
					data-aos="zoom-in"
					data-aos-duration="1000"
				>
					<Button
						text="Log In"
						color="green"
						containsLink
						link="/login"
						size="large"
					/>
					<Button
						text="Register"
						color="orange"
						containsLink
						link="/register"
						size="large"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
