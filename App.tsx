import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.text}>RN - Native Modules 📲</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
