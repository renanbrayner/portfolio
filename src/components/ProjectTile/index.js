import React, { useState, useEffect } from 'react';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import './styles.css';

function ProjectTile({ imgUrl, title, description, repository, site, siteTxt }) {
    const [displayIcon, setDisplayIcon] = useState('none');

    const txt = siteTxt;

    useEffect(() => {
        if(txt === 'Site') {
            setDisplayIcon('inline');
        }
    }, [txt]);

    return(
        <div className='project-tile'>
            <div className='center'>
                <div className='img' style={{ background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='links'>
                <a href={repository} target='_blank' rel='noopener noreferrer'><FiGithub size={16} color='#3d55dd'/> Repositorio</a>
                <a href={site} target='_blank' rel='noopener noreferrer'><FiGlobe size={16} style={{display: displayIcon}} color='#3d55dd'/> {siteTxt}</a>
            </div>
        </div>
    );
}

export default ProjectTile;