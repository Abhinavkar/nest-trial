import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeLogo from "../../images/aboutUs.png";
import recentLogo from "../../images/recentEvents.png";
import Fade from 'react-reveal/Fade';
import Alumnlogo from '../../images/Alumniicon.png';
import Tada from 'react-reveal/Tada';
import teamProfile from '../../images/teamInfo.png';

const Home = () => {
	return (
		<div className="home">
			<Navbar></Navbar>
			<div className="main-home">
				<div className="aboutUs">
					<Tada>
						<div className="homeLogoMain">
							<img src={Alumnlogo} />

							<p className="Alumninest">Alumni Nest</p>
						</div>
						{/*<p className="quotem">-Connecting Network</p>
					</div>
					<div>
						<p className="quote1">"I think the success of any school can be measured by the contribution the alumni make to our national life." <br></br> ~ John F. Kennedy</p>
					</div> */}
						<div id="container">
							Creating !
							<div id="flip">
								<div><div>Building Networks</div></div>
								<div><div>Lifestyle</div></div>
								<div><div>Everything</div></div>
							</div>
							AweSoMe!
						</div>

					</Tada>
					<Fade left>
						<div className="aboutUsBottom">


							<div className="homeLogoContainer">
								<img src={homeLogo} />
							</div>
							<div className="aboutUsInfo">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Deleniti labore necessitatibus velit, aspernatur suscipit voluptas
									accusamus nisi alias animi expedita minima natus sunt quidem, ipsum
									ipsa numquam, doloremque ducimus quibusdam? Est tempora maxime eligendi
									placeat ducimus hic magni quis consectetur a et dicta harum quasi repellendus
									aliquid, fugit, totam sunt nisi ratione, doloribus magnam. Assumenda amet
									totam tempore! Nihil facilis magni eius porro nulla recusandae modi
									repellendus, rem quos possimus sunt numquam facere, id labore? Debitis
									reiciendis distinctio magnam, corporis blanditiis ab suscipit libero
									maxime dolorum! Provident sunt inventore illo in quaerat reprehenderit,
									quae quibusdam vitae tempora tempore repellendus et!</p>
							</div>
						</div>
					</Fade>
				</div>
				<Fade right>
					<div className="recentEvents">
						<div className="recentEventsCardGroup">
							<div className="recentEventsCard">
								<div className="eventImage">
									<img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg" alt="Event1" />
								</div>
								<p className="eventName">Alumni Fest</p>
								<p className="eventDesc">19 . NOV . 2022</p>

							</div>
							<div className="recentEventsCard">
								<div className="eventImage">
									<img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/media/images/169_1640419827_96abfa9e65d5d604c010fb63ea95cdd5.jpeg" alt="Event2" />
								</div>
								<p className="eventName">Event -2</p>
								<p className="eventDesc">04 . DEC . 2022</p>


							</div>
							<div className="recentEventsCard">
								<div className="eventImage">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUojkfhMf4HkGKs3KJTM96LH86OeEX2qw9w&usqp=CAU" alt="Event3" />
								</div>
								<p className="eventName">Event -3</p>
								<p className="eventDesc">02 . JAN . 2023</p>
							</div>
						</div>
						<div className="recentEventsLogo">
							<img src={recentLogo} />
						</div>
					</div>
				</Fade>
			</div>
			<Fade up>

				<div className="teamInfo">
					<img src={teamProfile} />
				</div>
			</Fade>
			<Fade left>
				<div className="whyUsBottom">
					<div className="homeLogoContainer">
						<img src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Illustartion_vjqumg.png" />
					</div>
					<div className="aboutUsInfo">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Deleniti labore necessitatibus velit, aspernatur suscipit voluptas
							accusamus nisi alias animi expedita minima natus sunt quidem, ipsum
							ipsa numquam, doloremque ducimus quibusdam? Est tempora maxime eligendi
							placeat ducimus hic magni quis consectetur a et dicta harum quasi repellendus
							aliquid, fugit, totam sunt nisi ratione, doloribus magnam. Assumenda amet
							totam tempore! Nihil facilis magni eius porro nulla recusandae modi
							repellendus, rem quos possimus sunt numquam facere, id labore? Debitis
							reiciendis distinctio magnam, corporis blanditiis ab suscipit libero
							maxime dolorum! Provident sunt inventore illo in quaerat reprehenderit,
							quae quibusdam vitae tempora tempore repellendus et!</p>
					</div>
				</div>
			</Fade>

			<Footer></Footer>
		</div >
	);
};

export default Home;
