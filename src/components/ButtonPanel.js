import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorButton from './CalculatorButton';
/**
 * ButtonPanel component that renders the calculator buttons in a grid layout
 * matching the iOS calculator design
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onButtonPress - Callback function when a button is pressed
 * @param {string} props.clearButton - Text to display on clear button (AC/C)
 */
const ButtonPanel = ({ onButtonPress, clearButton = 'AC' }) => {
  // Button rows configuration following iOS calculator layout
  const buttons = [
    [{ text: clearButton, type: 'function' }, { text: '±', type: 'function' }, { text: '%', type: 'function' }, { text: '÷', type: 'operation' }],
    [{ text: '7', type: 'number' }, { text: '8', type: 'number' }, { text: '9', type: 'number' }, { text: '×', type: 'operation' }],
    [{ text: '4', type: 'number' }, { text: '5', type: 'number' }, { text: '6', type: 'number' }, { text: '-', type: 'operation' }],
    [{ text: '1', type: 'number' }, { text: '2', type: 'number' }, { text: '3', type: 'number' }, { text: '+', type: 'operation' }],
    [{ text: '0', type: 'number', wide: true }, { text: '.', type: 'number' }, { text: '=', type: 'operation' }]
  ];
  return (
    <View style={styles.container}>
      {buttons.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((button) => (
            <CalculatorButton
              key={button.text}
              text={button.text}
              type={button.type}
              wide={button.wide}
              onPress={() => onButtonPress(button.text, button.type)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default ButtonPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
});
