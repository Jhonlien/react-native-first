import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import shoppingBag from '../image/shopping-bag.png';

// class Position extends Component {
//     constructor(props){
//         super(props);
//         console.log('--> Constructor');
//         this.state ={
//             total : 0,
//         }
//     }
//     componentDidMount(){
//         setTimeout( () => {
//             this.setState({
//                 total : 10
//             })
//         }, 2000);
//         console.log('--> Component did mount')
//     }
//     componentDidUpdate(){
//         console.log('--> Component did update');
//     }

//     componentWillUnmount(){
//         console.log('--> Component Will Unmount ');
//     }
//     render(){
//         console.log('--> Render')
//         return (
//             <View style={styles.wrap}>
//                 <View style={styles.cart}>
//                     <Image source = {shoppingBag}
//                     style = {styles.icon}
//                     />
//                     <Text style={styles.notif}> {this.state.total} </Text>    
//                 </View>    
//                 <Text>Keranjang Belanja</Text>
//             </View>
//         )
//     }
// }

const Position = () => {
    const [total, setTotal] = useState(10);
    useEffect(()=>{
        console.log('did mount')
        setTimeout(()=>{
            setTotal(20)
        }, 2000);
        return () => {
            console.log('did update')
        }
    }, [total])
    return (
        <View style={styles.wrap}>
            <View style={styles.cart}>
                <Image source = {shoppingBag}
                    style = {styles.icon}
                    />
                <Text style={styles.notif}> {total} </Text>    
            </View>    
            <Text>Keranjang Belanja</Text>
        </View>
    )
}

export default Position

const styles = StyleSheet.create({
    wrap : {
        padding: 10,
        alignItems: 'center',
        position : 'relative'
    },
    cart : {
        width : 80,
        height: 80,
        borderWidth : 2,
        borderColor : '#2980b9',
        borderRadius : 60,
        justifyContent : 'center',
        alignItems : 'center',
    },
    icon : {
        width:40, height:40,
    },
    notif : {
        fontSize :12,
        color : 'white',
        backgroundColor : '#16a085',
        width: 24,
        height: 24,
        textAlign : 'center',
        borderRadius: 25,
        position : 'absolute',
        top : 0,
        right : 0,
    }
})
