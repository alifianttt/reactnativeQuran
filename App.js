/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import subjectReducer from './SubjectsReducer'
import Login from './component/Login';
import HomeList from './component/HomeQuran';
import DetailSurat from './component/DetailSurat';
const Stack = createStackNavigator()
const store = createStore(subjectReducer)
class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          options={{ headerShown:false}}
          name="Login"
          component={ Login }/>

          <Stack.Screen
          name="Home"
          options={{ headerShown:false}}
          component={ HomeList}/>

          <Stack.Screen
          name="Detail Surat"
          component={ DetailSurat }/>

        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }
};


export default App;
