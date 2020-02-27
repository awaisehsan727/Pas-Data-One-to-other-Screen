import React, { Component } from 'react';
//import react in our code. 
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import third from './pages/third';
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    FirstPage: { screen: FirstPage }, 
    //First entry by default be our first screen 
    //if we do not define initialRouteName
    SecondPage: { screen: SecondPage },
    third:{screen:third} 
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);