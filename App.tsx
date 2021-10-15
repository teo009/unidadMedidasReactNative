import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Converter from './src/components/Converter';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Converter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cefa',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
  },
});
