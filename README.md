# iOS Calculator App

A React Native calculator app styled like iOS calculator with basic arithmetic operations.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear display for input and results
- Numeric keypad and operation buttons
- Clear/reset functionality
- iOS-appropriate UI styling
- Error handling (division by zero)
- Chained operations
- Decimal support

## Installation

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac users) or Expo Go app on your iOS device

### Setup Innstructions

1. Clone the repository
   ```
   git clone https://github.com/yourusername/react-native-ios-calculator.git
   cd react-native-ios-calculator
   ```

2. Install dependencies
   ```
   npm install
   ```
   or if you use yarn
   ```
   yarn install
   ```

3. Start the development server
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

4. Run on iOS simulator or scan the QR code with Expo Go app on your iOS device

## Usage

- Tap numeric buttons to input numbers
- Tap operation buttons (+, -, Ã—, Ã·) to perform operations
- Tap '=' to calculate the result
- Tap 'AC' to clear all input
- Tap '+/-' to toggle between positive and negative numbers
- Tap '%' for percentage calculations

## Project Structure

```
react-native-ios-calculator/
â• App.js              # Main application entry point
â‘ app.json          # Expo configuration
	â• src/
â•¡ components/      # UI components
â¡ |â”€â”€â”€ ButtonPanel.js    Calculator button layout
Š¡ |
â¡ |
â¡ `CalculatorButton.js Individual button component
â¡ `Display.js       Calculator display component
â¡ screens/
Š„€`CalculatorScreen.js # Main calculator screen logic
â”€ package.json      Dependencies and scripts
```

## Technology Stack

- React Native
- JavaScript
- Expo

## Test
# Test 2
