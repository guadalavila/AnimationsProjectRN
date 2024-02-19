import React, {useState} from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ILoader {
  percentage: number;
  color?: string;
}
const Loader = ({percentage, color = '#16A085'}: ILoader) => {
  const screen = Dimensions.get('screen');
  const width = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {duration: 500}),
    };
  });
  const [percent, setPercent] = useState(0);

  const handleWidth = () => {
    const max = screen.width - 20;
    const calculo = (percentage * max) / 100;
    if (Number(width.value + calculo) <= max) {
      width.value = width.value + calculo;
      setPercent((Number(width.value + calculo) * 100) / max);
    } else {
      width.value = 0;
    }
  };

  return (
    <View>
      <Text style={styles.text}>{percent}%</Text>
      <Animated.View
        style={[styles.container, style, {backgroundColor: color}]}
      />
      <Button title="Press me" onPress={handleWidth} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 10,
    height: 30,
    backgroundColor: '#D3D3D3',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
