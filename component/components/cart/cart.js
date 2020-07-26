import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Image 
} from 'react-native'
import shoppingBag from '../../../image/shopping-bag.png';

const Cart = () => {
    return (
        <View style={styles.wrap}>
            <View style={styles.cart}>
                <Image source = {shoppingBag}
                    style = {styles.icon}
                    />
                <Text style={styles.notif}> 0 </Text>    
            </View>    
            <Text>Keranjang Belanja</Text>
        </View>
    )
}

export default Cart

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

