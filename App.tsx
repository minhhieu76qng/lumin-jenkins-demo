
import React, { useState } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [username, setUsername] = useState<string>('');

  const callMyName = () => {
    Alert.alert('Hello', username || 'Unknown', [
      {
        text: 'Hi',
        onPress: () => console.log('Hi pressed')
      }
    ])
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{
          padding: 12
        }}>
          <Text style={{
            marginBottom: 8,
            fontSize: 24,
            fontWeight: '700',
          }}>Hello World!</Text>
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              padding: 10,
            }}
            onChangeText={v => setUsername(v)}
            placeholder='Input your name'
            value={username}
          />
          <Button onPress={callMyName} title="Call my name" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
