// src/screens/AuthScreen.js
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
// import { requestPermissions } from '../utils/permissions';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = () => {
    // Uncomment this block and import auth when Firebase is set up.
    // if (isLogin) {
    //   auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(() => console.log('User logged in'))
    //     .catch(error => console.error('Login error:', error));
    // } else {
    //   auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(() => console.log('User registered'))
    //     .catch(error => console.error('Register error:', error));
    // }
  };
  // useEffect(() => {
  //   requestPermissions();
  // }, []);

  return (
    <View style={styles.container}>
      <Header title={isLogin ? 'Login' : 'Register'} />
      
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      
      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title={isLogin ? 'Login' : 'Register'} onPress={handleAuth} />
        <Button
          title={isLogin ? 'Switch to Register' : 'Switch to Login'}
          onPress={() => setIsLogin(!isLogin)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20, // Add padding to left and right for better alignment
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10, // Add space between inputs
  },
  buttonContainer: {
    marginTop: 20, // Space between inputs and buttons
    alignItems: 'center',
  },
});

export default AuthScreen;
