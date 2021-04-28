import React from "react";
import Typed from "react-typed";

const Subhead = () => {
    return (
        <div className = "wrapper">
            <Typed
                className="typed-text"
                strings={[" Designer", "Web Developer"]}
                typeSpeed={60}
                backSpeed={70}
                loop
            />
        </div>
    );
}

export default Subhead;