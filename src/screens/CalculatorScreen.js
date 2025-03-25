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
     // Don't format during decimal input
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

  /**
   * Handles all button presses and updates calculator state
   * @param {string} buttonText - The text of the pressed button
   * @param {string} buttonType - The type of the pressed button (number, operation, function)
   */
  const handleButtonPress = useCallback((buttonText, buttonType) => {
    switch (buttonType) {
      case 'number':
        handleNumberInput(buttonText);
        break;
      case 'operation':
        handleOperation(buttonText);
        break;
      case 'function':
        handleFunction(buttonText);
        break;
    }
  }, []);

  /**
   * Handles numeric input (digits and decimal point)
   * @param {string} digit - The digit or decimal point pressed
   */
  const handleNumberInput = useCallback((digit) => {
    // Set clearAll to false since we have input
    setClearAll(false);

    if (waitingForOperand) {
      setDisplayValue(digit === '.' ? '0.' : digit);
      setWaitingForOperand(false);
    } else {
      // Handle decimal point
      if (digit === '.') {
        if (!displayValue.includes('.')) {
          setDisplayValue(displayValue + '.');
        }
        return;
      }
      
      // Replace 0 at the beginning
      if (displayValue === '0') {
        setDisplayValue(digit);
      } else {
        // Limit input length to prevent overflow
        if (displayValue.replace(/[,.]/g, '').length < 9) {
          setDisplayValue(displayValue + digit);
        }
      }
    }
  }, [displayValue, waitingForOperand]);

  /**
   * Handles operation buttons (+, -, ×, ÷, =)
   * @param {string} nextOperation - The operation button pressed
   */
  const handleOperation = useCallback((nextOperation) => {
    // Parse the current display value
    const inputValue = displayValue;
    
    // If we already have a stored operation and value
    if (operation && previousValue !== null && !waitingForOperand) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplayValue(result);
      setPreviousValue(result);
    } else {
      setPreviousValue(inputValue);
    }
    
    // Handle equals button
    if (nextOperation === '=') {
      setOperation(null);
    } else {
      setOperation(nextOperation);
    }
    
    setWaitingForOperand(true);
  }, [displayValue, operation, previousValue, waitingForOperand, calculate]);

  /**
   * Handles function buttons (AC/C, ±, %)
   * @param {string} func - The function button pressed
   */
  const handleFunction = useCallback((func) => {
    switch (func) {
      case 'AC':
      case 'C':
        setDisplayValue('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
        setClearAll(true);
        break;
      case '±':
        setDisplayValue(
          displayValue.charAt(0) === '-' 
            ? displayValue.substring(1) 
            : '-' + displayValue
        );
        break;
      case '%':
        const value = parseFloat(displayValue) / 100;
        setDisplayValue(value.toString());
        break;
    }
  }, [displayValue]);

  // Determine the buttons' display text - AC vs C
  const clearButtonText = clearAll ? 'AC' : 'C';
   
  // Format the display value
  const formattedValue = formatDisplayValue(displayValue);

  return (
    <SafeAreaView style={styles.container}>
      {/* Added top spacer for better vertical centering */}
      <View style={styles.topSpacer} />
      
      <View style={styles.calculator}>
        <Display value={formattedValue} />
        <ButtonPanel 
          onButtonPress={handleButtonPress} 
          clearButton={clearButtonText}
        />
      </View>
      
      {/* Added bottom spacer for better padding above home indicator */}
      <View style={styles.bottomSpacer} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', // Center content vertically
  },
  topSpacer: {
    flex: 0.5, // Takes 1/6 of available space
  },
  calculator: {
    flex: 4, // Takes 4/6 of available space
    justifyContent: 'flex-end',
    padding: 10,
  },
  bottomSpacer: {
    flex: 0.5, // Takes 1/6 of available space
  },
});

export default CalculatorScreen;