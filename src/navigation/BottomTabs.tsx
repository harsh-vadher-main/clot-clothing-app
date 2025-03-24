import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../theme/Theme';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import Profile from '../screens/Profile';
import {NotificatioNavigator, OrderNavigator} from './AppNavigator';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.purple,
          tabBarInactiveTintColor: COLORS.grayies,
          title: '',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml xml={icons().focusedhome} />
            ) : (
              <SvgXml xml={icons().unfocusedhome} />
            ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificatioNavigator}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.purple,
          tabBarInactiveTintColor: COLORS.grayies,
          title: '',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml xml={icons().focusednotification} />
            ) : (
              <SvgXml xml={icons().unfocusednotification} />
            ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderNavigator}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.purple,
          tabBarInactiveTintColor: COLORS.grayies,
          title: '',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml xml={icons().focusedcart} />
            ) : (
              <SvgXml xml={icons().unfocusedcart} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.purple,
          tabBarInactiveTintColor: COLORS.grayies,
          title: '',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml xml={icons().focusedprofile} />
            ) : (
              <SvgXml xml={icons().unfocusedprofile} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
