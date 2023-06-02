import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import General from '../Cards/EditCards/general';
import Display from '../Cards/EditCards/display';
import Links from '../Cards/EditCards/links';

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="General" component={General} options={options} />
      <Tab.Screen name="Display" component={Display} options={options} />
      <Tab.Screen name="Links" component={Links} options={options} />
    </Tab.Navigator>
  );
};

export default TopNavigator;

const options = {
  tabBarItemStyle: {
    backgroundColor: '#2242D8',
    borderRadius: 20,
    width: 100,
  },
  tabBarPressColor: '#2242D8',
  tabBarInactiveTintColor: '#8D8D8D',
  tabBarActiveTintColor: '#FFFFFF',
  tabBarContentContainerStyle: {
    backgroundColor: '#FFFFFF',
    columnGap: 25,
  },
};
