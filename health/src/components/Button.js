// src/components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, width = 150, height = 50 }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: width, height: height }]} // Use custom or default width/height
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    // paddingVertical: 15, // Vertical padding for better text spacing
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center', // Vertically center text
    alignItems: 'center',
    marginHorizontal : 2 // Horizontally center text
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  }
});

export default Button;
