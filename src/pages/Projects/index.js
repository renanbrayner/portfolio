import React from 'react';
import './styles.css';

import NavBar from '../../components/NavBar';
import ProjectTile from '../../components/ProjectTile';

import imgUrl from '../../assets/logon.png';
import gitSearchImg from '../../assets/gitsearch.png';
import pedraPapelTesouraImg from '../../assets/pedra-papel-tesoura.png';
import jogoDaVelhaImg from '../../assets/jogo-da-velha.png';
import todoImg from '../../assets/todo.png';
import borderRadiusImg from '../../assets/borderradius.png';
import sorteadorImg from '../../assets/sorteador.png';
import catsImg from '../../assets/cats.png';
import placarImg from '../../assets/placar.png';

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
                        description='Projeto resultante da Semana Omnistack #11. Feito com ReactJs, React Native e NodeJS.'
                        repository='https://github.com/renanbrayner/Be-The-Hero'
                        site='#'
                        siteTxt=''
                    />
                    <ProjectTile
                        imgUrl={borderRadiusImg}
                        title='Border Radius Previewer'
                        description='Site feito com ReactJS para vizualização de border-radius.'
                        repository='https://github.com/renanbrayner/borderradiuspreview'
                        site='https://renanbrayner.github.io/borderradiuspreview'
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
                        imgUrl={catsImg}
                        title='CATS!'
                        description='Site feito com Svelte que consome uma api de fatos e outra de fotos de gato.'
                        repository='https://github.com/renanbrayner/cats'
                        site='https://randomcats.netlify.app/'
                        siteTxt='Site'
                    />
                    <ProjectTile
                        imgUrl={placarImg}
                        title='Placar'
                        description='Placar feito com Svelte.'
                        repository='https://github.com/renanbrayner/placar'
                        site='https://placar-competicao.netlify.app/'
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
                        imgUrl={sorteadorImg}
                        title='Sorteador'
                        description='Sorteador com opções customizáveis.'
                        repository='https://github.com/renanbrayner/sorteador'
                        site='https://renanbrayner.github.io/sorteador/'
                        siteTxt='Site'
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