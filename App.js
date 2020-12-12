import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import Header from './components/header'
import Product from './components/product'
import Addproduct from './components/addproduct'
import Removeproduct from './components/removeproduct'

export default function App() {
  const [products,setProducts]=useState([
    {text:'Apple', key:'1'},
    {text:'Banana', key:'2'},
    {text:'Mango', key:'3'},
    ]);

    const submitHandler = (text) => {
      setProducts(prevProducts => {
        return [
          { text, key: Math.random().toString() },
          ...prevProducts
        ];
      });
    };

    const removeProduct = (text) =>{
      setProducts((prevProducts)=>{
        return  prevProducts.filter(products => products.text != text)
      })
    }


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <Addproduct submitHandler={submitHandler} />
      <Removeproduct removeproduct={removeProduct} />
      <View style={styles.list}>
      <FlatList
        data={products}
        renderItem={({item})=>(
        <Product products={item} />
        )}
        />
      </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    padding:20,
  },
  list:{
    marginTop:40,
    color:'black'
  }
});
