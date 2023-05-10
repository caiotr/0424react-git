import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A from '../telas/app.js';
import B from '../telas/pokemon.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="A" screenOptions={{
          headerShown: true,
        }}>
          <Stack.Screen name="A" component={A} options={{ title: 'A' }} />
          <Stack.Screen name="B" component={B} options={{ title: 'B' }} />

        </Stack.Navigator>
      </NavigationContainer >
  );
}

export default App;

