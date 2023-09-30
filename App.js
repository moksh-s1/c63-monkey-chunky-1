import * as React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {Header} from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default class App extends React.Component {
  render(){
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
          backgroundColor = {'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: {redColor}
          }}
          />
          <TextInput/>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </SafeAreaProvider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },Component
});
