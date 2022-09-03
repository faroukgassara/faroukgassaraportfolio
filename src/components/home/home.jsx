import React from 'react' ;
import "./home.css";
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './headerSocials';
import ScrollDown from './scrollDown';
import Shapes from './shapes';

const Home = () => {
    return (
        <div>
            <section className="home container" id="home">
                <div className='intro'>
                    <img src={Me} alt='' className='home_img' />
                    <h1 className='home_name'>Farouk Gassara</h1>
                    <span className='home_education'> I'm a Software Architecture Engineer</span>

                    <HeaderSocials />
                
                    <a href="#contact" className="btn">Hire Me</a>

                    <ScrollDown />
                </div>
                <Shapes />
            </section>
        </div>
    )
}

export default Home 