import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';



export default function product({products}) {
    return (
       <TouchableHighlight>
            <Text style={styles.item}>{products.text}</Text>
        </TouchableHighlight>
            
    )
};

const styles= StyleSheet.create({

    item:{
        padding:16,
        marginTop:16,
        borderColor:'coral',
        color:'white',
        fontWeight:'bold',
        borderWidth:2,
        borderStyle:'dotted',
        borderRadius:10,
        width:200,
        textAlign:"center"

    }

});
