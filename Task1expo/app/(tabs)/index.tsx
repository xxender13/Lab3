import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to my first Expo app by Harshil Sharma</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', // Set background color to blue
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center content
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Set text color to white for contrast
    textAlign: 'center',
  },
});
cd..