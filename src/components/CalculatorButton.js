import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
/**
 * CalculatorButton Component
 * 
 * A reusable button component for an iOS-style calculator that supports
 * different button types (operation, number, function) and a wide button option.
 * 
 * @param {string} text - The text to display on the button
 * @param {string} type - The type of button: 'operation', 'number', or 'function'
 * @param {boolean} wide - Whether the button should be wide (double width)
 * @param {function} onPress - The function to call when the button is pressed
 * @param {boolean} isActive - For operation buttons, indicates if it's the currently selected operation
 * @returns {JSX.Element}
 */
const CalculatorButton = ({ text, type = 'number', wide = false, onPress, isActive = false }) => {
  /**
   * Get the appropriate style for the button based on its type and state
   */
  const getButtonStyle = () => {
    const baseStyle = [styles.button];
    if (wide) baseStyle.push(styles.wideButton);
    
    switch (type) {
      case 'operation':
        baseStyle.push(isActive ? styles.activeOperationButton : styles.operationButton);
        break;
      case 'function':
        baseStyle.push(styles.functionButton);
        break;
      case 'number':
      default:
        baseStyle.push(styles.numberButton);
        break;
    }
    return baseStyle;
  };
  
  /**
   * Get the appropriate style for the text based on the button type
   */
  const getTextStyle = () => {
    const baseStyle = [styles.text];
    
    switch (type) {
      case 'function':
        baseStyle.push(styles.functionText);
        break;
      case 'operation':
        baseStyle.push(isActive ? styles.activeOperationText : styles.operationText);
        break;
      case 'number':
      default:
        baseStyle.push(styles.numberText);
        break;
    }
    
    return baseStyle;
  };
  return (
    <TouchableOpacity 
      style={getButtonStyle()} 
      onPress={() => onPress(text)}
      activeOpacity={0.7}
    >
      <Text style={getTextStyle()}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;

// Calculate button size based on screen size
const screenWidth = Dimensions.get('window').width;
const buttonWidth = (screenWidth - 50) / 4;  // 50 = 5 * 10 (margins)

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: buttonWidth,
    width: buttonWidth,
    borderRadius: buttonWidth / 2,
    margin: 5,
  },
  wideButton: {
    width: buttonWidth * 2 + 10, // 10 = margin between buttons
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  operationButton: {
    backgroundColor: '#FF9500', // Orange
  },
  activeOperationButton: {
    backgroundColor: 'white',
  },
  functionButton: {
    backgroundColor: '#A5A5A5', // Light gray
  },
  numberButton: {
    backgroundColor: '#333333', // Dark gray
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
  },
  numberText: {
    color: 'white',
  },
  functionText: {
    color: 'black',
  },
  operationText: {
    color: 'white',
  },
  activeOperationText: {
    color: '#FF9500', // Orange
  },
});