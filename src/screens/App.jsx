import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
    </View>
  );
};
const Login = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <Button
        title="Go To Home Screen"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({});
