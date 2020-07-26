import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Buttons = () => {
    const [number, oNumber] = useState(0);
    return (
        <View>
            <Text style={styles.numb}>{number}</Text>    
            <Button style = {styles.but}
                title = "Increment" 
                onPress={() => {
                    oNumber(number + 1)
                }
            }/>
            <Button style = {styles.but}
                title = "Decrement" 
                onPress={() => {
                    if(number === 0){
                        oNumber(0);
                    }
                    else{
                        oNumber(number - 1)
                    }
                }
            }/>
        </View>
    )
}

const dynamicState = () => {
    return (
        <View style={styles.wrapper}>
            <Buttons />
        </View>
    )
}

export default dynamicState

const styles = StyleSheet.create({
    wrapper : {
        padding : 20
    },
    numb : {
        fontSize: 20,
        fontWeight: "bold",
        textAlign : 'center',
        marginBottom : 5
    },
    but : {
        paddingBottom : 5
    }
})
