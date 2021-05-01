# Sarah DeMercurio React Portfolio
This portfolio was built using React.js

![Demo](./src/imgs/react-gif.gif)

I was required to have a Header and Footer component that is used on multiple pages as well as a single project component used to render multiple projects.

#### Project Component Code
``` javascript
import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { GoRocket } from 'react-icons/go';

const WebProjects = ({ webProject }) => {
    return (
        <div className="web-projects">
            {
                webProject.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <h5>
                            <span>{item.title}</span>
                        </h5>

                        <div className="image-data">
                            <img className="images" src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a className="git-icon" href={item.link1} target="blank"><GoMarkGithub /></a>
                                    <a className="deploy-icon" href={item.link2} target="blank"><GoRocket /></a>
                                    <div className="techs">{item.techs.join("  |  ")}</div>
                                </li>
                            </ul>

                        </div>
                        <div className="desc">
                            <p>
                                {item.desc}
                            </p>
                            </div>
                        </div>
                })
            }
                    </div>
    );
}

            export default WebProjects;

``` 

## Status
This is a work in progress. There is room for improving the responsiveness and tightening the overall styles. I would like to include a contact form and more projects as I deem them fit for presenting.

## Links
[GitHub Repo](https://github.com/sdemercurio/react-portfolio.git)

[Deployment](https://sdemercurio.github.io/react-portfolio/)