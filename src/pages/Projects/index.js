import React from 'react';
import './styles.css';

import NavBar from '../../components/NavBar';
import ProjectTile from '../../components/ProjectTile';

import imgUrl from '../../assets/logon.png';
import gitSearchImg from '../../assets/gitsearch.png';
import pedraPapelTesouraImg from '../../assets/pedra-papel-tesoura.png';

function Projects() {
    return(
        <div className='projects-container'>
            <div className='background'/>
            <div className='projects-content-container'>
                <NavBar/>
                <div className='project-tiles'>
                    <ProjectTile
                        imgUrl={imgUrl}
                        title='Be The Hero'
                        description='Projeto resultante da Semana Omnistack #11. Feito com ReactJs, React Native e Nodejs'
                        repository='https://github.com/renanbrayner/Be-The-Hero'
                        site='#'
                        siteTxt=''
                    />
                    <ProjectTile
                        imgUrl={gitSearchImg}
                        title='GitSearch'
                        description='React app que usa a api do github para buscar usuários.'
                        repository='https://github.com/renanbrayner/gitsearch'
                        site='https://renanbrayner.github.io/gitsearch/'
                        siteTxt='Site'
                    />
                    <ProjectTile
                        imgUrl={pedraPapelTesouraImg}
                        title='Pedra Papel Tesoura'
                        description='Jogo de pedra, papel e tesoura feito com JavaScript e Css vannila.'
                        repository=''
                        site='#'
                        siteTxt='Site'
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;