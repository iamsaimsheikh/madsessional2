import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>PRODUCTS</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        height:50,
        width:'100%',
        backgroundColor:'coral',
        marginTop:120,
    },
    text:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        marginTop:10,
        fontWeight:'bold'
    }
})
