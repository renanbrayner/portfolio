import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiFeather, FiLayout, FiFileText  } from 'react-icons/fi';
import './styles.css';

import pdfData from '../../utils/pdfData';

function SideDrawer({ close, show }) {
    
    let drawerClasses = 'side-drawer';
    
    if (show) {
        drawerClasses = 'side-drawer open';
    }

    return(
        <nav className={drawerClasses}>
            <ul className='side-drawer-links-list'>
                <li>
                    <Link to='/' className='side-drawer-link' onClick={close}>
                        <FiHome color='#3d55dd' className='icon'/> Home
                    </Link>
                </li>
                <li>
                    <Link to='/projetos' className='side-drawer-link' onClick={close}>
                        <FiLayout color='#3d55dd' className='icon'/> Projetos
                    </Link>
                </li>
                <li>
                    <Link to='/sobre' className='side-drawer-link' onClick={close}>
                        <FiFeather color='#3d55dd' className='icon'/> Sobre
                    </Link>
                </li>
                <li>
                    <a href={pdfData} className='side-drawer-link' download onClick={close}>
                        <FiFileText color='#3d55dd' className='icon'/> Baixar Currículo
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SideDrawer;
