import React from 'react';
<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
=======
import { StatusBar, View, StyleSheet } from 'react-native';
>>>>>>> local-fixes
import CalculatorScreen from './src/screens/CalculatorScreen';

export default function App() {
  return (
<<<<<<< HEAD
    <SafeAreaProvider>
      <StatusBar style="light" />
      <CalculatorScreen />
    </SafeAreaProvider>
  );
}
=======
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
>>>>>>> local-fixes
