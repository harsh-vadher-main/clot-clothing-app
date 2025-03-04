import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavHeader from '../../common/NavHeader';
import ButtonCommon from '../../common/ButtonCommon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';
import {FONTFAMILY, FONTSIZE, COLORS} from '../../theme/Theme';
interface OrderProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'order'>;
}

const OrderMain = ({navigation}: OrderProps) => {
  return (
    <SafeAreaView>
      <NavHeader midText="Orders" />
      <View style={styles.midView}>
        <View style={styles.imageView}>
          <Image
            source={require('D:/React-native/Clot/src/assets/images/check-out.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={styles.notificationView}>
          <Text style={styles.notificationText}>No Orders yet</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('orderCategory')}>
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

export default OrderMain;

const styles = StyleSheet.create({
  midView: {
    marginTop: 216,
    marginHorizontal: 103,
    alignItems: 'center',
  },
  imageView: {
    // marginHorizontal: 121,
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
    fontFamily: FONTFAMILY.Montserrat_Medium,
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
