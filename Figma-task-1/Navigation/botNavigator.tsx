/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../Tabs/settings';
import Cards from '../Tabs/cards';
import ScanCards from '../Tabs/sacnCard';
import AddCards from '../Tabs/addCard';
import Contacts from '../Tabs/contacts';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function BotNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let icon;
          if (route.name === 'Cards') {
            icon = focused ? 'card' : 'card-outline';
          }
          if (route.name === 'Scan card') {
            icon = focused ? 'scan' : 'scan-outline';
          }
          if (route.name === 'Add card') {
            icon = focused ? 'add-circle' : 'add-circle-outline';
          }
          if (route.name === 'Contacts') {
            icon = focused ? 'person-circle' : 'person-circle-outline';
          }
          if (route.name === 'Settings') {
            icon = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={icon} size={size} color="#2242D8" />;
        },
      })}>
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Scan card"
        component={ScanCards}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Add card"
        component={AddCards}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{header: () => null}}
      />
    </Tab.Navigator>
  );
}
