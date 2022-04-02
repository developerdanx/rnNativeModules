import {View, NativeModules, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const {Counter} = NativeModules;

export default function App() {
  const [value, setValue] = React.useState(Counter.getConstants().initialCount);

  const handleIncrement = () => {
    Counter.increment((result: number) => setValue(result));
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>Native Modules 📲</Text>
      <Text style={[style.text, style.value]}>{value}</Text>
      <Button title="Increment Counter" onPress={handleIncrement} />
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
  value: {
    marginVertical: 30,
  },
});
