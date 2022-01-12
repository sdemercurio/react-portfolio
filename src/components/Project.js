import proj1 from '../imgs/40watt.PNG';
import proj2 from '../imgs/vax_trax.PNG';
import proj3 from '../imgs/deep_thoughts.png';
import proj4 from '../imgs/weather.PNG';

const projects = [
    {
        id: 1,
        link1: 'https://github.com/sdemercurio/40-watt.git',
        link2: 'https://www.40wattcoaching.com/',
        image: proj1,
        techs: ['HTML5', 'css', 'Vanilla Javascript'],
        title: '40 Watt Coaching',
        desc: 'Tim Fortescue is an executive coach located in San Francisco. He reached out to me for a logo and ended up with a website as well. Take a look around and maybe book him for a session if you are in the Bay Area!',
    },

    {
        id: 2,
        link1: 'https://github.com/jacob-af/vax-trax.git',
        link2: 'https://vax-trax.herokuapp.com/',
        image: proj2,
        techs: ['Chart.js', 'Express.js', 'Node.js', 'MySql'],
        title: 'Vax Trax',
        desc: 'An information based web application. For this app, I handled the front-end. VaxTrax provides up to date information about the novel Covid-19 virus and allows individuals to track and inform others about their experience with recieving the vaccine.',
    },

    {
        id: 3,
        link1: 'https://github.com/sdemercurio/markdown-blog',
        link2: 'https://node-mongo-express-app.herokuapp.com/',
        image: proj3,
        techs: ['Express.js' , 'Node.js', 'MongoDB', "EJS"],
        title: 'Blog App',
        desc: 'A basic blog built using Node.js Express.js, MongoDB and EJS. Designed to be responsive with UI/UX best practices, and current design trends in mind.',
    },

    {
        id: 4,
        link1: 'https://github.com/sdemercurio/any-weather.git',
        link2: 'https://sdemercurio.github.io/any-weather/',
        image: proj4,
        techs: ['Open Weather API' , 'JQuery'],
        title: 'Any Weather App',
        desc: 'An application utilizing Open Weather API to retrive weather data and dynamically update the DOM.',
    }
]

export default projects;