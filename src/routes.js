import React from 'react';
import Particles from 'react-particles-js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Sobre from './pages/Sobre'
import Curriculo from './pages/Curriculo'

import particleOpt from './utils/particleOpt'

function Routes() {
    return(
        <Router>

            <Particles
                params={particleOpt}
                className='particles'
            />

            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/projetos' exact component={Projects}/>
                <Route path='/sobre' exact component={Sobre}/>
                <Route path='/curriculo' exact component={Curriculo}/>
            </Switch>
        </Router>
    )
}

export default Routes;