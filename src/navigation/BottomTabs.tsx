import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../theme/Theme';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import Profile from '../screens/Profile';
import {NotificatioNavigator, OrderNavigator} from './AppNavigator';
import OrderMain from '../screens/Orders/OrderMain';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homescreen"
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
        name="notification"
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
        name="cart"
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
        name="profile"
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
