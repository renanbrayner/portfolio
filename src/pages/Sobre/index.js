import React, { useState, useEffect } from 'react';

import NavBar from '../../components/NavBar';

import imgUrl from '../../assets/sobre.jpg';

import './styles.css';

function Sobre() {
    const [greeting, setGreeting] = useState('Boa Tarde');

    var today = new Date();
    var time = today.getHours()

    useEffect(() => {
        if(time >= 0 && time < 6) {
            setGreeting('Boa madrugada')
        } else if(time >= 6 && time < 12) {
            setGreeting('Bom dia')
        } else if(time >= 12 && time < 18) {
            setGreeting('Boa tarde')
        } else if(time >=18) {
            setGreeting('Boa noite')
        }
    }, [time])
    return(
        <div className="sobre-container">
            <div className='background'/>
            <div className="sobre-content-container">
                <NavBar></NavBar>
                <div className='text-container'>
                    <h1>Sobre Mim</h1>
                    <img className='sobre-img' src={imgUrl} alt='Foto minha no recife antigo.'/>
                    <p><b>{greeting}</b>, meu nome é Renan, tenho 20 anos e sou um desenvolvedor. Estou ingresso na faculdade de análise e desenvolvimento de sistemas com o objetivo de me profissionalizar e busco ingressar no mercado de trabalho e por em prática meus conhecimentos em JavaScript, Html, CSS, Sass, Node.js, React, React Native e Github.</p>
                    <p className='last'>Tenho um bom pensamento analítico e sou atencioso com detalhes, gosto de trabalhar em equipe principalmente se a comunicação for clara e objetiva, sou uma pessoa criativa e além de programar tenho hobbys como desenhar e pintar.</p>
                </div>
            </div>
        </div>
    )
}

export default Sobre;