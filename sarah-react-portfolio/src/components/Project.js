import proj1 from '../imgs/40watt.PNG';
import proj2 from '../imgs/vax_trax.PNG';

const projects = [
    {
        id: 1,
        link1: 'www.40wattcoaching.com',
        link2: '',
        icon1: 'GoMarkGithub',
        image: proj1,
        techs: '',
        title: '40 Watt Coaching',
        desc: 'Tim Fortescue is an executive coach located in San Francisco. He reached out to me for a logo and ended up with a website as well. Take a look around and maybe book him for a session if you are in the Bay Area!',
    },

    {
        id: 2,
        link1: 'www.40wattcoaching.com',
        link2: 'https://vax-trax.herokuapp.com/',
        icon1: 'GoMarkGithub',
        image: proj2,
        techs: 'Chart.js Express.js Node.js MySql BCrypt Passport',
        title: '40 Watt Coaching',
        desc: 'An information based web application. For this app, I handled the front-end. VaxTrax provides up to date information about the novel Covid-19 virus and allows individuals to track and inform others about their experience with recieving the vaccine.',
    }
]

export default projects;