import React from 'react';
import {StyleSheet, View} from 'react-native';
import Loader from './src/components/Loader';
import Card from './src/components/Card';

const App = () => {
  return (
    <View style={styles.container}>
      <Loader percentage={20} />
      <Loader percentage={10} color="#1F618D" />
      <Card />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 80,
  },
});
