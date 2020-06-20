import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {name: 'Vishal', id: '1'},
        {name: 'Krishnapriya', id: '2'},
        {name: 'Ved', id: '3'},
        {name: 'Nitin', id: '4'},
        {name: 'Varsha', id: '5'},
        {name: 'Ani', id: '6'},
        {name: 'Rahul', id: '7'},
        {name: 'Devesh', id: '8'},
        {name: 'Poonam', id: '9'},
        {name: 'Vishupriya', id: '10'},
    ]);

  return (
    <View style={styles.container}>

        <FlatList 
            numColumns={2}
            keyExtractor={ (item) => item.id}
            data={people}
            renderItem={ ({item}) => (
                <Text style={styles.item}>{item.name}</Text>
            )}
        />

        {/*<ScrollView>
            {people.map(item => (
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            ))}
        </ScrollView>*/}
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
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});
