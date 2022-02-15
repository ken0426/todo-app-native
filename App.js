import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('ダイヤン');
  const [hobby, setHobby] = useState('');

  const onPressButton = () => {
    setName('田中');
  }

  const onChangeText = (value) => {
    setHobby(value);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={hobby}
      />
      <Text>私の名前は{name}です</Text>
      <Text>趣味は{hobby}です</Text>
      <Button title='名前を変える' onPress={onPressButton} ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
