import React, { Component } from 'react';
import logo from './foxy.jpg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import  Test  from './components/Test';
import  Main  from './components/Main';
import  Category  from './components/Category';
import  Post  from './components/Post';
import  Menu  from './components/Menu';
import  Page  from './components/Page';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
class App extends Component {

  render() {
    return (
      <ParallaxProvider>

        <div>
          <div className="App">
            <nav />
              <div>

                <Parallax
                className="hero-container"
                offsetYMax={50}
                offsetYMin={-60}
                slowerScrollRate
                tag="figure"
                >

                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">FoxyLady</h1>
                </header>

                </Parallax>
              </div>

              <p className='App-intro'>
                <div className='container'>
                <Menu />


                <Switch>
                <Route path='/post/:id' component={Post} exact={true} > </Route>
                <Route path='/page/:id' component={Page} exact={true} > </Route>
                <Route path='/category/:id' component={Category} exact={true} > </Route>
                <Route path='/' component={Main} exact={true} />
                </Switch>
            </div>
          </p>
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
