import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Example from "./src/Example";

export default function App() {
  return (
    <View style={styles.container}>
     <Example/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30
  },
});
