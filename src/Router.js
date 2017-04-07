import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import HomeContainer from './container/HomeContainer';
import Movie from './components/Movie';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
          key="main"
          navigationBarStyle={{ backgroundColor: 'black' }}
          titleStyle={{ color: 'white', fontWeight: '500' }}
      >
        <Scene
          key="homecontainer"
          component={HomeContainer}
          title="Movies"
        />
        <Scene
          key="movie"
          component={Movie}
          title="Movie Details"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
