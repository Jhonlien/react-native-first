import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import ActionBar from 'react-native-action-bar';
// import SampleComponent from './component/sampleComponent';
// import FlexBox from './component/flexBox';
import Position from './component/position';
import DynamicProps from './component/dynamicProps';

const App = () => {
  // const [isShow, setIsShow] = useState(true);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIsShow(false)
  //   }, 6000);
  // });
  return (
      <View>
        <ActionBar title={'RN'}/>
        {/* //{isShow && <Position/>  } */}
        <DynamicProps />
      </View>  
  )
}

export default App;


