import React from "react";
import cssClasses from "./styles/MainPage.module.css";
import worldMap from "../../Assets/Images/world-map.png";

const Contact = () => {
    return (
        <>
            <section className={`${cssClasses.get_in_touch_area}`}>
                <section className={`${cssClasses.world_map_area}`}>
                    <div className={cssClasses.container}>
                        <div className={cssClasses.world_map_inner}>
                            <img className={cssClasses.img_fluid} src={worldMap} alt="" />
                            <div className={`${cssClasses.bd_callout} px-4`}>
                                <h3>
                                    ORBIZ GROUP
                                    <br />
                                    Head Office
                                </h3>
                                <p>3rd Floor, Ashtavinayak Apt., 1128 Shukrawar Peth, Sathe Colony, Near Tilak Rd Shetriya Karayalay, Behind Kothari Honda, Pune - 411002</p>
                                <h4 className="block">
                                    <a href="tel:020-71172850">020-71172850</a>{" "}
                                </h4>
                                <h4 className="block">
                                    <a href="mailto:siddesh@orbizestate.com">siddesh@orbizestate.com</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Contact;
