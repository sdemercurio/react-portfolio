import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { GoRocket } from 'react-icons/go';

const WebProjects = ({ webProject }) => {
    return (
        <div className="web-projects">
            {
                webProject.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img className="images" src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="blank"><GoMarkGithub /></a>
                                    <a href={item.link2}target="blank"><GoRocket /></a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>
                            {item.desc}
                        </p>
                    </div>
                })
            }
        </div>
    );
}

export default WebProjects;