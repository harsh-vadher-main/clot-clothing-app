import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavHeader from '../../common/NavHeader';
import {
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  BORDERRADIUS,
  SPACING,
} from '../../theme/Theme';
import ButtonCommon from '../../common/ButtonCommon';

interface NotificationProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'notification'>;
}

const Mainscreen = ({navigation}: NotificationProps) => {
  return (
    <SafeAreaView>
      <NavHeader midText="Notification" />
      <View style={styles.midView}>
        <View style={styles.imageView}>
          <Image
            source={require('D:/React-native/Clot/src/assets/images/bell.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={styles.notificationView}>
          <Text style={styles.notificationText}>No Notification yet</Text>
        </View>

        <TouchableOpacity onPress={() =>navigation.navigate('ActiveNotification')}>
          <ButtonCommon
            name="Explore Categories"
            textStyle={styles.textStyle}
            viewStyle={styles.btnView}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Mainscreen;

const styles = StyleSheet.create({
  midView: {
    marginTop: 204,
    marginHorizontal: 24,
  },
  imageView: {
    marginHorizontal: 121,
    marginTop: 0,
  },
  notificationView: {
    marginTop: 24,
  },
  notificationText: {
    textAlign: 'center',
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.Montserrat_Medium,
  },
  textStyle: {
    fontSize: FONTSIZE.size_14,
    marginHorizontal: 24,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    marginTop: 16,
  },
  btnView: {
    marginTop: 24,
    width: 185,
    backgroundColor: COLORS.purple,
    height: 56,
    borderRadius: 40,
    marginHorizontal: 78.5,
  },
});
