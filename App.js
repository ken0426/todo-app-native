import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import { YellowBox } from 'react-native-web';

export default function App() {

  const names = [
    {name: 'Aさん', key: 1},
    {name: 'Bさん', key: 2},
    {name: 'Cさん', key: 3},
    {name: 'Dさん', key: 4},
    {name: 'Eさん', key: 5},
    {name: 'Fさん', key: 6},
    {name: 'Gさん', key: 7},
    {name: 'Hさん', key: 8},
    {name: 'Iさん', key: 9},
    {name: 'Aさん', key: 10},
    {name: 'Bさん', key: 11},
    {name: 'Cさん', key: 12},
    {name: 'Dさん', key: 13},
    {name: 'Eさん', key: 14},
    {name: 'Fさん', key: 15},
    {name: 'Gさん', key: 16},
    {name: 'Hさん', key: 17},
    {name: 'Iさん', key: 18},
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={names}
        renderItem={({item})=> (
          <TouchableOpacity onPress={() => Alert.alert('名前', item.name)} key={item.key} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
      {names.map((item) => (
        <View key={item.key} style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      ))}
      </ScrollView> */}
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
  item:{
    width:300,
    marginBottom:30,
    backgroundColor:'yellow',
  },
  name:{
    fontSize:30,
    textAlign:'center',
  }
});
