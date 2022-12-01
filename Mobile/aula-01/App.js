import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.intro}>Se terminar positivo eu pago o latão</Text>
          <Text style={styles.text}>Pontuação Sayuri: {count}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>
        <StatusBar translucent={false} style="auto" backgroundColor='pink' />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 50
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  }
});
