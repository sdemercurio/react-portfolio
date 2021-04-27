import React from 'react';
import '../styles/title.css';

const Title = ({title}) => {
    return (
        <div className = "title">
            <h3>
                <span>{title}</span>
            </h3>
            <hr />
        </div>
    );
}

export default Title;