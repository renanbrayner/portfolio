import React from 'react';
import { FiDownload } from 'react-icons/fi';

import NavBar from '../../components/NavBar';

import pdfData from '../../utils/pdfData';

import './styles.css';

function Curriculo() {
    return(
        <div className="curriculo-container">
            <div className='background'/>
            <div className="curriculo-content-container">
                <NavBar/>
                <object className="pdf" type="application/pdf" aria-labelledby="Meu curriculo." data={pdfData}></object>
                <p className='mobile'>Ops, parece que o seu disposivito não tem suporta vizualização de pdf, <a href={pdfData} download>Clique aqui para baixar o curriculo</a></p>
                <a className='download' href={pdfData} download>Baixar o currículo <FiDownload/></a>
            </div>
        </div>
    );
}

export default Curriculo;