import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import D from '../telas/aria.js';
import C from '../telas/zero.js';
import '@react-navigation/material-bottom-tabs';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Aria" component={D} />
      <Tab.Screen name="Zero" component={C} />
    </Tab.Navigator>
  );
}

function App() {
  return (
      <NavigationContainer>
        <MyTabs></MyTabs>
      </NavigationContainer >
  );
}

export default App;