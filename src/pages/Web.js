import React from "react";
import Title from '../components/Title';
import Projects from '../components/Project';
import WebProjects from '../components/WebProjects';
import '../styles/projects.css';
import { useState } from 'react';

const Web = () => {
    const [webProjects ] = useState(Projects);

    return (
        <div className="PortfolioPage">
            <div className="title">
           <Title title={'Web Projects'}/>
           </div>
           <div className="projects">
                <WebProjects webProject={webProjects}/>
           </div>
        </div>
    );
}

export default Web;