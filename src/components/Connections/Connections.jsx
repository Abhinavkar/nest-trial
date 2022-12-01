import React, { useContext } from "react";
import "./connections.css";

const Connections = () => {
    console.log('hello');
	return (
			<div className="main-conn">
                <div className="conn-sec">
                    <img src="../../images/sec.png"/>
                </div>
                <div className="conn-hig">
                    <img src="../../images/high.png"/>
                </div>
                <div className="conn-grad">
                    <img src="../../images/grad.png"/>
                </div>
                <div className="conn-postGrad">
                    <img src="../../images/postGrad.png"/>
                </div>
            </div>
	)
};

export default Connections;
