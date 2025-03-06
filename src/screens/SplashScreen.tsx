import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigator';
import {COLORS, FONTFAMILY,} from '../theme/Theme';

interface SplashScreenProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'splash'>;
}
const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignUp');
    }, 1000);
  }, []);
  return (
    <View style={styles.splashView}>
      <Image
        source={require('../assets/images/splashimage.png')}
        style={styles.splashImage}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashView: {
    flex: 1,
    backgroundColor: COLORS.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    fontSize: 52,
    fontFamily: FONTFAMILY.Montserrat_ExtraLight,
    color: COLORS.white,
  },
  splashImage: {
    height: 80,
    width: 175,
    alignSelf: 'center',
  },
});
