import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import EtapasConteudo from './EtapasConteudo';


export class Routes extends Component {

    render() {
        return (


                <Switch >
                    <Route exact path='/' component={EtapasConteudo}/>
                    
                    {/*<Route component={NoMatch}/>*/}
                </Switch >

        )
    }
};

export default Routes;
