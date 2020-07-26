import React, {useState, useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import ActionBar from 'react-native-action-bar';
// import SampleComponent from './component/sampleComponent';
// import FlexBox from './component/flexBox';
import Position from './component/position';
import DynamicProps from './component/dynamicProps';
import DynamicState from './component/dynamicState';
import Communication from './component/communication';

const App = () => {
  // const [isShow, setIsShow] = useState(true);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIsShow(false)
  //   }, 6000);
  // });
  return (
      <View>
        <StatusBar backgroundColor="green"/>
        <ActionBar title={'RN'}/>
        {/* //{isShow && <Position/>  } */}
        {/* <DynamicProps />
        <DynamicState /> */}
        <Communication />
      </View>  
  )
}

export default App;


