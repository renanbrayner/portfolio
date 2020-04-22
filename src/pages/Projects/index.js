import React from 'react';
import './styles.css';

import NavBar from '../../components/NavBar';
import ProjectTile from '../../components/ProjectTile';

import imgUrl from '../../assets/logon.png';
import gitSearchImg from '../../assets/gitsearch.png';
import pedraPapelTesouraImg from '../../assets/pedra-papel-tesoura.png';
import jogoDaVelhaImg from '../../assets/jogo-da-velha.png';
import todoImg from '../../assets/todo.png';

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
                        description='Projeto resultante da Semana Omnistack #11. Feito com ReactJs, React Native e Nodejs.'
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
                        imgUrl={jogoDaVelhaImg}
                        title='Jogo da velha'
                        description='Jogo da velha do tutorial encontrado na página do proprio react, mas usando react hooks.'
                        repository='https://github.com/renanbrayner/jogo-da-velha'
                        site='https://renanbrayner.github.io/jogo-da-velha/'
                        siteTxt='Site'
                    />
                    <ProjectTile
                        imgUrl={todoImg}
                        title='ToDo'
                        description='Lista de fazeres feita com ReactJS, React Native, NodeJS e banco de dados mongoDB.'
                        repository='https://github.com/renanbrayner/Todo'
                        site='#'
                        siteTxt=''
                    />
                    <ProjectTile
                        imgUrl={pedraPapelTesouraImg}
                        title='Pedra Papel Tesoura'
                        description='Jogo de pedra, papel e tesoura feito com JavaScript e Css vannila.'
                        repository='https://github.com/renanbrayner/pedraPapelETesoura'
                        site='https://renanbrayner.github.io/pedraPapelETesoura/'
                        siteTxt='Site'
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;