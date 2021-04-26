import portrait from '../imgs/bw_me.jpg';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
        <div className="container">
            <img className= 'portrait' src={ portrait } alt="Portrait of Sarah" />
            <p>Sarah is a <span className="webdev">designer</span> and <span className="webdev"> web developer</span> who hails from the magical mitten.</p>
        </div>
        </div>
    );
}

export default Home;