import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Display component for iOS calculator
 * Renders the calculator display with current value
 * Automatically adjusts font size based on content length
 * @param {object} props - Component props
 * @param {string|number} props.value - The value to display
 */
const Display = ({ value }) => {
  // Convert value to string for display and formatting
  const displayValue = String(value);
  
  // Determine font size based on text length
  const getFontSize = useMemo(() => {
    const length = displayValue.length;
    
    if (length > 9) return 40;
    if (length > 7) return 50;
    if (length > 5) return 60;
    return 70;
  }, [displayValue]);

  return (
    <View style={styles.container}>
      <Text 
        style={[styles.displayText, { fontSize: getFontSize }]} 
        numberOfLines={1} 
        adjustsFontSizeToFit
      >
        {value}
      </Text>
    </View>
  
);
