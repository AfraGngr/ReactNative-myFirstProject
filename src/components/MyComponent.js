import React from "react";
import {View, Text, StyleSheet} from 'react-native';


const MyComponent = () => {
    return(
        <View style = {styles.container}>
            <Text>Selamlar!</Text>
            <Text>Clarusway App'e hoş geldiniz!</Text>

            <View>
                <Text>FullStack Developer olmaya hazır olun!</Text>
            </View>
        </View>
    )
}

export default MyComponent;

const styles = StyleSheet.create({
    container : {
        margin: 5,
        padding: 10,
        borderWidth: 2,
        borderColor:"#e0e0e0",
        borderRadius:10,     
    }
});