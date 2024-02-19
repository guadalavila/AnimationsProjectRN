import React, {Children, useEffect} from 'react';
import {Button, StyleSheet, View, useWindowDimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Card = () => {
  const {width, height} = useWindowDimensions();
  const offset = useSharedValue(height + 100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}],
    };
  });

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.card, animatedStyle]} />
      <Button
        title="Press"
        onPress={() => {
          console.log(offset.value);
          offset.value = withSpring(0);
        }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  card: {
    width: '50%',
    height: 100,
    alignSelf: 'center',
    backgroundColor: '#007867',
    borderRadius: 10,
  },
});
