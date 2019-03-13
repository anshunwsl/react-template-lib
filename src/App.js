import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {appConfig} from './appConfig.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import asyncComponent from './utils/importUtils.js';

// import About from './components/About/index.js';
// import Home from './components/Home/Home.js';
//
// import Topics from './components/Topics/index.js';

//

const Home = asyncComponent(()=>import('./pages/Home/Home.js'));
const About = asyncComponent(()=>import('./pages/About/index.js'));
const Topics = asyncComponent(()=>import('./pages/Topics/index'));


// import ReactRouter, {Router,Route,} from 'react-router';

class App extends Component {
    //
    constructor(props) {
        //
        super(props);
        //
        const {author} =appConfig;
        console.log(author);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    {/*<ul>*/}
                    {/*<li><Link to="/">首页</Link></li>*/}

                    {/*<li><Link to="/about">关于</Link></li>*/}
                    {/*<li><Link to="/topics">主题列表</Link></li>*/}
                    {/*</ul>*/}
                    {/*<hr/>*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
