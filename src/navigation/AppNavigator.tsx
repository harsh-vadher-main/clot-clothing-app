import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/SignUp';
import SignUp2 from '../screens/SignUp2';
import ForgetPassword from '../screens/ForgetPassword';
import CreateAccount from '../screens/CreateAccount';
import TellUsScreen from '../screens/TellUsScreen';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import BottomTabs from './BottomTabs';
import Categories from '../screens/categories/Categories';
import Hoodie from '../screens/Cloths/Hoodie';
import Mainscreen from '../screens/Notification/Mainscreen';
import ActiveNotification from '../screens/Notification/ActiveNotification';
import OrderMain from '../screens/Orders/OrderMain';
import OrderCategory from '../screens/Orders/OrderCategory';
import OrderInside from '../screens/Orders/OrderInside';
import ProductMainScreen from '../screens/Products/ProductMainScreen';
import Address from '../screens/Profile/Address';
import Payment from '../screens/Profile/Payment';
import NewCard from '../screens/Profile/NewCard';
import NewAddress from '../screens/Profile/NewAddress';
import WishList from '../screens/Profile/WishList';
export type RootStackParams = {
  splash: undefined;
  SignUp: undefined;
  Login: undefined;
  SignUp2: undefined;
  forgetpassword: undefined;
  createaccount: undefined;
  tellUsScreen: undefined;
  homescreen: undefined;
  notification: undefined;
  cart: undefined;
  profile: undefined;
  bottomtabs: undefined;
  categories: undefined;
  hoodies: undefined;
  ActiveNotification: undefined;
  order: undefined;
  orderCategory: undefined;
  orderInside: undefined;
  productmainscreen: undefined;
  address: undefined;
  payment: undefined;
  newcard: undefined;
  newaddress: undefined;
  wishlist: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignUp">
        <RootStack.Screen name="splash" component={SplashScreen} />
        <RootStack.Screen name="SignUp" component={SignUp} />
        <RootStack.Screen name="SignUp2" component={SignUp2} />
        <RootStack.Screen name="forgetpassword" component={ForgetPassword} />
        <RootStack.Screen name="createaccount" component={CreateAccount} />
        <RootStack.Screen name="tellUsScreen" component={TellUsScreen} />
        <RootStack.Screen name="homescreen" component={HomeScreen} />
        {/* <RootStack.Screen name="notification" component={Notification} /> */}
        <RootStack.Screen name="order" component={OrderMain} />
        <RootStack.Screen name="profile" component={Profile} />
        <RootStack.Screen name="bottomtabs" component={BottomTabs} />
        <RootStack.Screen name="categories" component={Categories} />
        <RootStack.Screen name="hoodies" component={Hoodie} />
        <RootStack.Screen name="notification" component={Mainscreen} />
        <RootStack.Screen name="address" component={Address} />
        <RootStack.Screen name="payment" component={Payment} />
        <RootStack.Screen name="newcard" component={NewCard} />
        <RootStack.Screen name="newaddress" component={NewAddress} />
        <RootStack.Screen name="wishlist" component={WishList} />
        <RootStack.Screen
          name="productmainscreen"
          component={ProductMainScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export const NotificatioNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="notification">
      <RootStack.Screen name="notification" component={Mainscreen} />
      <RootStack.Screen
        name="ActiveNotification"
        component={ActiveNotification}
      />
    </RootStack.Navigator>
  );
};

export const OrderNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="order">
      <RootStack.Screen name="order" component={OrderMain} />
      <RootStack.Screen name="orderCategory" component={OrderCategory} />
      <RootStack.Screen name="orderInside" component={OrderInside} />
    </RootStack.Navigator>
  );
};

export const ProfileNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="profile">
      <RootStack.Screen name="profile" component={Profile} />
      <RootStack.Screen name="address" component={Address} />
      <RootStack.Screen name="payment" component={Payment} />
    </RootStack.Navigator>
  );
};

// export const
export default AppNavigator;

const styles = StyleSheet.create({});
