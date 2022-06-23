import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import List from './components/ColorBox';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <List />
      </View>
    </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
});

export default App;
