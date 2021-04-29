import React from 'react';
import '../styles/title.css';

const Title = ({title}) => {
    return (
        <div className = "title">
            <div className = "row">
                <div className = "col-md-12">
            <h3>
                <span>{title}</span>
            </h3>
            </div>
            </div>
        </div>
    );
}

export default Title;