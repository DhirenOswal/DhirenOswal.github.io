import React, { useEffect } from "react";

import Contact from "./Contact";
import Team from "./Team";
import Feature from "./Feature";
import Header from "./Header";

function MainPage() {
    return (
        <>
            <Header />
            <Feature />
            <Team />
            <Contact />
        </>
    );
}

export default MainPage;
