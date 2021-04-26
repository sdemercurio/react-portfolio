import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className = "wrapper">
            <div className = "main-info">
            <h2>Sarah L. DeMercurio</h2>
            <Typed
                className="typed-text"
                strings={["Web Design", "Web Development"]}
                typeSpeed={60}
                backSpeed={70}
                loop
            />
            </div>
        </div>
    );
}

export default Header;