import React from "react";
import '../../components/Footer/footer.css';
import { NavLink, Link } from "react-router-dom";
import instaLogo from "../../images/instagram-logo.png";
import fbLogo from "../../images/facebook-logo.png";
import whatsAppLogo from "../../images/whatsapp-logo.png";
import gmailLogo from "../../images/gmail-logo.png";



function Footer() {
    return (
        <>
            <div className="main-footer">
                <div className="footer-top">
                    <div className="footer-left">
                        <p className="leftFooterTitle">Contact Us</p>
                        <NavLink to="#"><img className="footerIcon" src={fbLogo} /></NavLink>
                        <NavLink to="#"><img className="footerIcon" src={instaLogo} /></NavLink>
                        <NavLink to="#"><img className="footerIcon" src={whatsAppLogo} /></NavLink>
                        <NavLink to="#"><img className="footerIcon" src={gmailLogo} /></NavLink>
                    </div>
                    <div className="footer-right">
                        <p className="leftFooterTitle">Suggestions</p>
                        <div className="suggestionForm">
                        <input type="text" className="suggestionArea" placeholder="Have any Idea? Click here. "/>
                        <button className="btn send">Send</button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Alumni Nest. All right reserved for team iNiT 2022-23</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
