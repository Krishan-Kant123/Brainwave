// src/screens/RemindersScreen.js
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';

const RemindersScreen = () => {
  const [reminder, setReminder] = useState('');

  const addReminder = () => {
    // Implement reminder addition logic
    console.log('Reminder added:', reminder);
    setReminder('');
  };

  return (
    <View>
      <Header title="Medication Reminders" />
      <TextInput placeholder="Enter reminder details" value={reminder} onChangeText={setReminder} />
      <Button title="Add Reminder" onPress={addReminder} />
    </View>
  );
};

export default RemindersScreen;
