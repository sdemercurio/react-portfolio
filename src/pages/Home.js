import portrait from '../imgs/bw_me.jpg';
import Title from '../components/Title';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <>
            <div className="home-content">
                <Title title={'Sarah L. DeMercurio'} />
                <div className="home-container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className='portrait' src={portrait} alt="Portrait of Sarah" />
                        </div>
                        <div className="info col-md-6">
                            <p>I am a graphic designer making a leap toward web developer.
                                I earned a certification in full-stack web development from 
                                Michigan State University in May of 2021, and am now looking 
                                for an opportunity to grow as a front-end web developer. 
                            </p>
                            <p>Although I am most familiar with MERN stack, I am constantly learning 
                                new frameworks to see what fits best and because, well, there's a lot 
                                to learn out there!</p>
                            <p>Come on in, take a look around, and maybe we can build something cool together.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default Home;