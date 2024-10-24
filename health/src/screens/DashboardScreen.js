// src/screens/DashboardScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardButton from '../components/CardButton';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const features = [
  { id: '1', title: 'Reminders', icon: 'alarm-outline', screen: 'Reminders' },
  { id: '2', title: 'Appointments', icon: 'calendar-outline', screen: 'Appointments' },
  { id: '3', title: 'Wellness', icon: 'heart-outline', screen: 'Wellness' },
  { id: '4', title: 'Emergency', icon: 'warning-outline', screen: 'Emergency' },
  { id: '5', title: 'Communication', icon: 'chatbox-ellipses-outline', screen: 'Communication' },
];

const DashboardScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <CardButton
      title={item.title}
      icon={item.icon}
      onPress={() => navigation.navigate(item.screen)}
    />
  );

  return (
    <View style={styles.container}>
      <Header title="Dashboard" />

      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}  // Show two cards per row
        columnWrapperStyle={styles.row}  // Style for each row
        contentContainerStyle={styles.contentContainer}  // Padding for the list
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  row: {
    justifyContent: 'space-around',
  },
  contentContainer: {
    paddingVertical: 20,
  },
});

export default DashboardScreen;
