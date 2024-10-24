// src/components/CardButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CardButton = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Icon name={icon} size={40} color="#007AFF" />
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,  // Adjust card width
    height: 150, // Adjust card height
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default CardButton;
