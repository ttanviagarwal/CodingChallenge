import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../components/home/Home';
import ImageDetail from '../components/imageDetail/ImageDetail';

/**
 * Route stack
 */
export default createStackNavigator(
    {
      Home:Home,    
      Detail: ImageDetail
    },
    {
      initialRouteName: 'Home'
    }
);
  