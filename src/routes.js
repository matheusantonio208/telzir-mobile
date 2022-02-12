import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import PlansPrices from '#views/pages/PlansPrices/plansPrices-page.js';
import Simulation from '#views/pages/Simulation/simulation-page.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Simulation" component={Simulation} />
        <Stack.Screen name="PlansPrices" component={PlansPrices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
