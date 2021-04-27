import portrait from '../imgs/bw_me.jpg';
import Title from '../components/Title';
import Subhead from '../components/Subhead';

const Home = () => {
    return (
        <div className="home-content">
            <Title title={'Sarah L.DeMercurio'}/>
            <Subhead />
        <div className="container">
            <img className= 'portrait' src={ portrait } alt="Portrait of Sarah" />
            <p>Sarah is a <span className="webdev">designer</span> and <span className="webdev"> web developer</span> who hails from the magical mitten.</p>
        </div>
        </div>
    );
}

export default Home;