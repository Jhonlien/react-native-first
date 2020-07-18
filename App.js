/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
class Grettings extends Component{
  render(){
    return (
      <Text> Hello {this.props.name} </Text>
    );
  }
}
class App extends Component{
  render(){
    return (
      <View style={{alignItems:"center"}}>
        <Grettings name="Jhon"></Grettings>
        <Grettings name="Nathan"></Grettings>
        <Grettings name="Doe"></Grettings>
      </View>
    )
  }
}


export default App;
