import React from 'react'
import { 
    View, 
    Text,
    Image, 
    ScrollView,
    StyleSheet } from 'react-native'

const Story = (props) => {
    return (
        <View style = {styles.storyContainer}>
            <Image source={{uri: props.img }} style={styles.storyImage}/>
            <Text style={styles.storyText}>{props.judul}</Text>         
        </View>  
    )
}

const DynamicProps = () => {
    return (
    <ScrollView horizontal={true}>
        <View style={styles.container}>
        <Story 
            img = 'https://placeimg.com/640/480/tech'
            judul = 'Text 1'
        />
         <Story 
            img = 'https://placeimg.com/640/480/tech'
            judul = 'Text 1'
        />
        <Story 
            img = 'https://placeimg.com/640/480/tech'
            judul = 'Text 1'
        />
        <Story 
            img = 'https://placeimg.com/640/480/tech'
            judul = 'Text 1'
        />
        <Story 
            img = 'https://placeimg.com/640/480/tech'
            judul = 'Text 1'
        />
        <Story 
            img = 'https://placeimg.com/640/480/tech'
            judul = 'Text 1'
        />
        <Story 
            img = 'https://images.unsplash.com/photo-1554908081-267299e53de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
            judul = 'Text 1'
        />
        <Story 
            img = 'https://images.unsplash.com/photo-1554908081-267299e53de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
            judul = 'Text 1'
        />
    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        margin : 10,
        flexDirection : 'row'
    },
    storyContainer : {
      marginRight: 5
    },
    storyItem : {
        flex : 1,
        justifyContent : "center",
        alignItems: 'center'
    },
    storyImage : {
        width : 50, height : 50, borderRadius : 25
    },
    storyText : {
        marginTop : 3,
        marginLeft : 4,
        fontWeight :'bold'
    }
});

export default DynamicProps;
