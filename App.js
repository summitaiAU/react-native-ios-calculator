import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});