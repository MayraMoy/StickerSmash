import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Sumar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  title: {
    fontSize: 24, marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50', padding: 10, borderRadius: 5,
  },
  buttonText: {
    color: '#fff', fontSize: 18,
  },
});
