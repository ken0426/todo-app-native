import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const onPressItemDelete = (key) => {
    const newTodos = todos.filter((item) => item.key !== key)
    setTodos(newTodos)
  }

  const onChangeText = (value) => {
    setText(value)
  }

  const onPressButton = () => {
    const newTodos = [...todos, {
      name: text, key: Math.random().toString(),
    }]
    setText('')
    setTodos(newTodos)
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteView}
          onPress={()=> onPressItemDelete(item.key)}
        >
          <Text style={styles.deleteText}>完了</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoアプリ</Text>
      <TextInput
        style={styles.text}
        value={text}
        onChangeText={onChangeText}
      />
      <View style={styles.button}>
        <Button title='追加する' color='blue' onPress={onPressButton} />
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize:40,
    fontWeight: 'bold',
    marginTop:80,
    marginBottom: 20,
  },
  text: {
    height:40,
    width:300,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
  },
  item:{
    width:300,
    backgroundColor:'black',
    marginBottom:30,
    alignItems:'center',
    padding:10,
  },
  itemName: {
    fontSize:20,
    fontWeight:'bold',
    marginBottom: 8,
    color: 'white',
  },
  deleteView: {
    width:50,
    backgroundColor: 'gray',
  },
  deleteText: {
    color:'white',
    textAlign:'center',
  },
});
