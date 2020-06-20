import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {name: 'Vishal', key: '1'},
        {name: 'Krishnapriya', key: '2'},
        {name: 'Ved', key: '3'},
        {name: 'Nitin', key: '4'},
        {name: 'Varsha', key: '5'},
        {name: 'Ani', key: '6'},
        {name: 'Rahul', key: '7'},
        {name: 'Devesh', key: '8'},
        {name: 'Poonam', key: '9'},
        {name: 'Vishupriya', key: '10'},
    ]);

  return (
    <View style={styles.container}>
        <ScrollView>
            {people.map(item => (
                
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
