import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../paginas/Home';
import { Noticia } from '../paginas/Noticia';

export class App extends Component {


    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/noticia/:id' component={Noticia} />
                </Switch>
            </div>
        )
    }
};


