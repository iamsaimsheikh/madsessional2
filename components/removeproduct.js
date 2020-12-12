import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function removeproduct({ removeproduct }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Remove Product'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='coral' onPress={() => removeproduct(text)} title='Remove Product' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});