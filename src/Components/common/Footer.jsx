import React from "react";
import cssClasses from "../Home/styles/MainPage.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Enquire from "../ContactUs/Enquire";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/OrbizLogoH.png";

const Footer = () => {
    return (
        <>
            {/* footer section */}
            <footer className={cssClasses.footer_area}>
                <div className={cssClasses.footer_widget_area}>
                    <div className={cssClasses.container2}>
                        <img src={logo} className={cssClasses.footerLogo} />
                        <h3>
                            ORBIZ GROUP
                            <br />
                            Head Office
                        </h3>
                        <p>3rd Floor, Ashtavinayak Apt., 1128 Shukrawar Peth, Sathe Colony, Near Tilak Rd Shetriya Karayalay, Behind Kothari Honda, Pune - 02</p>
                    </div>
                    <div className={cssClasses.container1}>
                        <span>Projects</span>
                        <div className={cssClasses.projectList}>
                            <div>
                                <p>Completed:</p>
                                <ul className={cssClasses.listType}>
                                    <Link to="/completedProjects#1">
                                        <li>Nirmal Township</li>
                                    </Link>
                                    <Link to="/completedProjects#1">
                                        <li>Avalon</li>
                                    </Link>
                                    <Link to="/completedProjects#1">
                                        <li>ARTEMIS</li>
                                    </Link>
                                    <Link to="/completedProjects#1">
                                        <li>KIARA</li>
                                    </Link>
                                </ul>
                            </div>
                            <div>
                                <p>Ongoing:</p>
                                <ul className={cssClasses.listType}>
                                    <Link to="/Projects">
                                        <li>Kanchan</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cssClasses.container3}>
                        <span>Contact Us</span>
                        <div className={cssClasses.CTABtn}>
                            <Link to="/enquire">
                                <button className={cssClasses.getInTouchBtn}>Get in touch</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cssClasses.footer_copyright}>
                    <div className={cssClasses.container} style={{ display: "flex", justifyContent: "space-around" }}>
                        <div className={cssClasses.float_sm_left}>
                            <span style={{ fontWeight: 900, color: "#AACCF9" }}>
                                Copyright &copy; 2022 | All rights reserved | <span style={{ color: "#FFFFFF" }}>Orbiz</span>
                            </span>
                        </div>
                        <div className={cssClasses.float_sm_right}>
                            <ul>
                                <li className={cssClasses.social_icon}>
                                    <a href="/">
                                        <FacebookIcon style={{ color: "#AACCF9" }} />
                                    </a>
                                </li>
                                <li className={cssClasses.social_icon}>
                                    <a href="/">
                                        <TwitterIcon style={{ color: "#AACCF9" }} />
                                    </a>
                                </li>
                                <li className={cssClasses.social_icon}>
                                    <a href="/">
                                        <InstagramIcon style={{ color: "#AACCF9" }} />
                                    </a>
                                </li>
                                <li className={cssClasses.social_icon}>
                                    <a href="/">
                                        <LinkedInIcon style={{ color: "#AACCF9" }} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
