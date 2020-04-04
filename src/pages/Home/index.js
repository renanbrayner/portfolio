import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiFacebook, FiPhone, FiMail, } from 'react-icons/fi';
import Typist from 'react-typist';

import './styles.css'

import SideDrawer from '../../components/SideDrawer';
import Backdrop from '../../components/Backdrop'

import pdfData from '../../utils/pdfData';

import imgUrl from '../../assets/profile.jpg';

function Home() {
    const [isOpen, setOpen] = useState(false);

    function toggleButtonHandleClick() {
      setOpen( prevSetOpen => !prevSetOpen);
    }
  
    function backdropHandleClick() {
      setOpen(false);
    }
    
    let backdrop;
    
    if(isOpen) {
      backdrop = <Backdrop click={backdropHandleClick}/>;
    }
    
    return(
        <div>
        <SideDrawer show={isOpen} close={backdropHandleClick}/>
        <div className='home-container'>
            {backdrop}
            <div className='content-container' >
                <button className='mobile-navigation' onClick={toggleButtonHandleClick}>
                    <div className='mobile-navigation-line'/>
                    <div className='mobile-navigation-line'/>
                    <div className='mobile-navigation-line'/>
                </button>
                <div className='branding'>
                    <div className='branding-logo'>
                        <img className='profile' src={imgUrl} alt=''/>
                        <div className='branding-logo-text'>
                            <h1 className='title'>Renan Brayner</h1>
                            <Typist className='text' cursor={{element: '.'}}>
                                <span>Desenvolvedor Web</span>
                                <Typist.Backspace count={3} delay={1200} />
                                <span>Mobile</span>
                                <Typist.Backspace count={6} delay={1200} />
                                <span>React JS</span>
                                <Typist.Backspace count={8} delay={1200} />
                                <span>React Native</span>
                                <Typist.Backspace count={12} delay={1200} />
                                <span>Node JS</span>
                                <Typist.Backspace count={8} delay={1200} />
                            </Typist>
                        </div>
                    </div>
                    <div className='contact-info'>
                        <ul className='contact-info-list'>
                            <li>Rua João Alves Mendes, 470 – Apt. 302</li>
                            <li>renanbrayner@gmail.com</li>
                            <li>+55 (81) 98181-5475</li>
                            <ul className='contact-info-icons'>
                                <li>
                                    <a href='https://github.com/renanbrayner' target='_blank' rel='noopener noreferrer'>
                                        <FiGithub size={20} color='#3d55dd' className='icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.linkedin.com/in/renan-brayner-a2a6b31a2/' target='_blank' rel='noopener noreferrer'>
                                        <FiLinkedin size={20} color='#3d55dd' className='icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.facebook.com/renan.brayner.395' target='_blank' rel='noopener noreferrer'>
                                        <FiFacebook size={20} color='#3d55dd' className='icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://wa.me/5581981815475' target='_blank' rel='noopener noreferrer'>
                                        <FiPhone size={20} color='#3d55dd' className='icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='mailto: renanbrayner@gmail.com'>
                                        <FiMail size={20} color='#3d55dd' className='icon' />
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <nav className='navigation'>
                    <div className='links'>
                        <Link className='link primeiro' to='/projetos'>Projetos</Link>
                        <Link className='link' to='/sobre'>Sobre</Link>
                        <Link className='link ultimo' to='/curriculo'>Curriculo</Link>
                        <a className='link mobile' href={pdfData} download>Curriculo</a>
                    </div>
                </nav>
            </div>
        </div>
        </div>
    );
}

export default Home;