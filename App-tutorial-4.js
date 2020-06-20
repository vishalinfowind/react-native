import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    const [name, setName] = useState('Vishal');
    const [person, setPerson] = useState({ name: 'Hari', age: 40 })

    const clickHandler = () => {
        setName('KrishnaPriya');
        setPerson({ name: 'Rohit', age: 25 })
    }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and age is {person.age}</Text>

      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    margin: 20,
  },
});
