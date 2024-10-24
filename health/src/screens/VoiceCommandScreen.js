// src/screens/VoiceCommandScreen.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
// import Voice from '@react-native-voice/voice';
import Button from '../components/Button';
import Header from '../components/Header';

const VoiceCommandScreen = () => {
  const [recognizedText, setRecognizedText] = useState('');

  const startListening = () => {
    // Voice.start('en-US');
    // Voice.onSpeechResults = (e) => {
    //   setRecognizedText(e.value[0]);
    //   // Process the recognized command
    // };
  };

  return (
    <View>
      <Header title="Voice Commands" />
      <Button title="Start Listening" onPress={startListening} />
      <Text>{recognizedText}</Text>
    </View>
  );
};

export default VoiceCommandScreen;
