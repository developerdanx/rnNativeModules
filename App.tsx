import {View, NativeModules, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const {Counter} = NativeModules;

export default function App() {
  const [value, setValue] = React.useState(Counter.getConstants().initialCount);
  const [error, setError] = React.useState<undefined | string>();

  React.useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(undefined);
      }, 1500);
    }
  }, [error, setError]);

  const handleIncrement = () => {
    Counter.increment((result: number) => setValue(result));
  };

  const handleDecrement = async () => {
    try {
      const result = await Counter.decrement();
      setValue(result);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>{'Native Modules 📲 (iOS)'}</Text>
      {error && <Text style={[style.error, style.text]}>{error}</Text>}

      <Text style={[style.text, style.value]}>{value}</Text>

      <Button title="Increment Counter" onPress={handleIncrement} />
      <Button title="Decrement Counter" onPress={handleDecrement} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
  },
  text: {
    fontSize: 24,
  },
  value: {
    marginVertical: 30,
  },
});
