import portrait from '../imgs/bw_me.jpg';
import Title from '../components/Title';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div className="home-content">
            <Title title={'Sarah L.DeMercurio'} />
            <div className="container">
                <div className = "row">
                    <div className = "col-md-6">
                <img className='portrait' src={portrait} alt="Portrait of Sarah" />
                </div>
                <div className = "col-md-6">
                <p>Sarah is a <span className="webdev">designer</span> and <span className="webdev"> web developer</span> who hails from the magical mitten.</p>
                </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Home;