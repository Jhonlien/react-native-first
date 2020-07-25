import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

export default OldComponent = ()=>{
    return (
        <View>
          <Loop/>
          <MyImage style={{width:100, height: 200}}/>
          <NewComp/>
        </View>
    )
  }
  
  const Loop = () => {
      return <Text style={{textAlign:'center'}}> Hello world </Text>
  }
  
  const MyImage = () => {
    return (
      <Image source = {{uri: "https://placeimg.com/640/480/tech" }} style={{width:100, height:100, borderRadius:50}}/>
    );
  };
  
  class NewComp extends Component{
    render(){
      return(
        <View>
        <Text>This is Class Component</Text>
        <TextInput style={{borderBottomWidth : 1}} ></TextInput>
        </View>
      )
    }
  }

