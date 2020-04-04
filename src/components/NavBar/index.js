import React, { useState } from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';
import { FiHome, FiFeather, FiLayout, FiFileText, FiPhone, FiMail, FiGithub, FiLinkedin, FiFacebook  } from 'react-icons/fi';

import DrawerToggleButton from '../DrawerToggleButton';
import Backdrop from '../Backdrop';
import SideDrawer from '../SideDrawer';

import './styles.css';

import imgUrl from '../../assets/profile.jpg';

function NavBar() {
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
        <Router >
            <SideDrawer show={isOpen} close={backdropHandleClick}/>
            <div className='navbar-container'>
                {backdrop}
                <img className='logo' src={imgUrl} alt=''/>
                <div className='branding'>
                    <h1>Renan Brayner</h1>
                    <a href='https://wa.me/5581981815475' target='_blank' rel='noopener noreferrer'><FiPhone className='icon' color='#3d55dd'/></a>
                    <a href ='mailto: renanbrayner@gmail.com'><FiMail className='icon' color='#3d55dd'/></a>
                    <a href='https://github.com/renanbrayner' target='_blank' rel='noopener noreferrer'><FiGithub className='icon' color='#3d55dd'/></a>
                    <a href='https://www.linkedin.com/in/renan-brayner-a2a6b31a2/' target='_blank' rel='noopener noreferrer'><FiLinkedin className='icon' color='#3d55dd'/></a>
                    <a href='https://www.facebook.com/renan.brayner.395' target='_blank' rel='noopener noreferrer'><FiFacebook className='icon' color='#3d55dd'/></a>
                </div>
                <DrawerToggleButton className='hamburguer' click={toggleButtonHandleClick}/>
                <div className='navbar'>
                    <Link className='link' to='/projetos'>
                        <FiLayout color='#3d55dd' className='icon'/> Projetos
                    </Link>
                    <Link className='link' to='/sobre'>
                        <FiFeather color='#3d55dd' className='icon'/> Sobre
                    </Link>
                    <Link className='link' to='/curriculo'>
                        <FiFileText color='#3d55dd' className='icon'/> Curriculo
                    </Link>
                    <Link className='link' to='/'>
                        <FiHome color='#3d55dd' className='icon'/> Home
                    </Link>
                </div>
            </div>
        </Router>
    );
}

export default NavBar;