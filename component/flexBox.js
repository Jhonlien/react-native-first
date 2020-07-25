import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
class FlexBox extends Component{
    render(){
        return(
            // <View style={{
            //     alignItems: 'stretch',
            //     justifyContent: 'center',
            //     flexDirection: 'row',
            //     flex: 1,
            // }}>
            //     <View style={{
            //             backgroundColor:'#c0392b',
            //             flex:1,                        
            //             height:50
            //         }}>
            //     </View>
            //     <View style={{
            //             backgroundColor:'#f39c12',
            //             flex:1,
            //             height:50
            //         }}>
            //     </View>
            //     <View style={{
            //             backgroundColor:'#16a085',
            //             flex:1,
            //             height:50
            //         }}>
            //     </View>
            //     <View style={{
            //             backgroundColor:'#2980b9',
            //             flex:1,
            //             height:50
            //         }}>
            //     </View>
            // </View>
            <View style={{
                flexDirection:'row', 
                alignItems:'center', 
                justifyContent: 'center',
                marginTop:10
            }}>
                <Image source={{uri : 'https://static.republika.co.id/uploads/images/inpicture_slide/foto-profil-_170704110636-890.jpg'}} 
                style={{width:100, height:100, borderRadius: 50}}
                />
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Fandi Adhitya</Text>
                    <Text style={{marginTop:5}}>100 Subscriber</Text>
                </View>
            </View>
        )
    }
}
export default FlexBox;