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
- Tap operation buttons (+, -, ×, ÷) to perform operations
- Tap '=' to calculate the result
- Tap 'AC' to clear all input
- Tap '+/-' to toggle between positive and negative numbers
- Tap '%' for percentage calculations

## Project Structure

```
react-native-ios-calculator/
═ App.js              # Main application entry point
⁑ app.json          # Expo configuration
	═ src/
╡ components/      # UI components
⁡ |─── ButtonPanel.js    Calculator button layout
�� |
⁡ |
⁡ `CalculatorButton.js Individual button component
⁡ `Display.js       Calculator display component
⁡ screens/
���`CalculatorScreen.js # Main calculator screen logic
─ package.json      Dependencies and scripts
```

## Technology Stack

- React Native
- JavaScript
- Expo