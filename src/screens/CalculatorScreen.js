import React, { useState, useCallback } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

/**
 * CalculatorScreen - The main component that implements iOS calculator functionality
 * Manages calculator state and handles all operations
 */
const CalculatorScreen = () => {
  // State variables to track calculator values and operation
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [clearAll, setClearAll] = useState(true); // Used to toggle between AC and C

  /**
   * Formats large numbers with commas and handles decimal points
   * @param {string} value - Calculator value to format
   * @returns {string} - Formatted value for display
   */
  const formatDisplayValue = useCallback((value) => {
    // Handle potential calculation errors
    if (value === 'Error' || value === 'Infinity' || value === '-Infinity') {
      return 'Error';
    }
    \n    // Don't format during decimal input
    if (value.includes('.')) {
      const [integerPart, decimalPart] = value.split('.');
      const formattedInteger = parseFloat(integerPart).toLocaleString('en-US', {
        maximumFractionDigits: 0,
        useGrouping: true
      });
      return `${formattedInteger}.${decimalPart}`;
    }

    // Format the integer value with commas
    return parseFloat(value).toLocaleString('en-US', {
      maximumFractionDigits: 0,
      useGrouping: true
    });
  }, []);

  /**
   * Calculates the result of the pending operation
   * @param {number} leftOperand - First operand
   * @param {number} rightOperand - Second operand
   * @param {string} op - Operation to perform
   * @returns {string} - Result of calculation
   */
  const calculate = useCallback((leftOperand, rightOperand, op) => {
    leftOperand = parseFloat(leftOperand);
    rightOperand = parseFloat(rightOperand);
    
    let result;
    
    switch (op) {
      case '+':
        result = leftOperand + rightOperand;
        break;
      case '-':
        result = leftOperand - rightOperand;
        break;
      case '×':
        result = leftOperand * rightOperand;
        break;
      case '÷':
        // Handle division by zero
        if (rightOperand === 0) {
          return 'Error';
        }
        result = leftOperand / rightOperand;
        break;
      default:
        return rightOperand.toString();
    }

    // Handle potential overflow and format to string
    if (Math.abs(result) > 1e15) {
      return 'Error';
    }
    
    // Convert to string and trim unnecessary zeros
    return result.toString();
  }, []);

  //... (rest of the function is the same as the original code)

  // Determine the buttons' display text - AC vs C
  const clearButtonText = clearAll ? 'AC' : 'C';
   
  // Format the display value
  const formattedValue = formatDisplayValue(displayValue);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculator}>
        <Display value={formattedValue} />
        <ButtonPanel 
          onButtonPress={handleButtonPress} 
          clearButton={clearButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculator: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default CalculatorScreen;

// NOTE: This is a condensed version of the original code. You may want to fill in the rest of the functionality from the original file if necessary.