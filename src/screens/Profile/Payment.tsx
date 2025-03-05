import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';
import {icons} from '../../utils/icons';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';
import GrayBox from '../../common/GrayBox';

interface PaymentProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'payment'>;
}

const FirstCard = () => {
  return (
    <View style={styles.grayBox}>
      <View style={styles.contentMainView}>
        <Text style={styles.cardNumbers}>**** 4187</Text>
        <View>
          <SvgXml xml={icons().card} style={styles.cardIcon} />
        </View>
        <SvgXml xml={icons().next} style={styles.nextIcon} />
      </View>
    </View>
  );
};
const SecondCard = ({onPress}: any) => {
  return (
    <View style={styles.grayBox1}>
      <View style={styles.contentMainView}>
        <Text style={styles.cardNumbers}>**** 9387</Text>
        <View>
          <SvgXml xml={icons().card} style={styles.cardIcon} />
        </View>
        <SvgXml xml={icons().next} style={styles.nextIcon} onPress={onPress} />
      </View>
    </View>
  );
};
const PayPalCard = () => {
  return (
    <View style={styles.paypalCardView}>
      <Text style={styles.textInsideCard}>Cloth@gmail.com</Text>
      <View style={styles.nextIcon}>
        <SvgXml xml={icons().next} />
      </View>
    </View>
  );
};

const Payment = ({navigation}: PaymentProps) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginTop: 63, marginHorizontal: 27, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={icons().back} />
        </TouchableOpacity>
        <View style={{marginTop: 11}}>
          <Text style={styles.addressText}>Payment</Text>
        </View>
      </View>
      <View style={{marginTop: 32, marginHorizontal: 24}}>
        <Text
          style={{
            fontFamily: FONTFAMILY.Montserrat_Bold,
            fontSize: FONTSIZE.size_16,
          }}>
          Cards
        </Text>
      </View>
      <View>
        <FirstCard />
        <SecondCard onPress={() => navigation.navigate('newcard')} />
      </View>
      <View style={styles.nextOptionView}>
        <Text style={styles.paypalText}>Paypal</Text>
        <PayPalCard />
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  addressText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    marginHorizontal: 97,
  },
  cardIcon: {
    marginLeft: 11,
    marginTop: 28,
  },
  grayBox: {
    marginHorizontal: 24,
    backgroundColor: COLORS.grayies,
    height: 72,
    width: '85%',
    marginTop: 15,
    borderRadius: 10,
  },
  contentMainView: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  cardNumbers: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Medium,
    marginVertical: 25,
    marginLeft: 12,
    // width: '20%',
  },
  nextIcon: {
    position: 'absolute',
    right: 9,
    marginVertical: 24,
  },
  grayBox1: {
    marginHorizontal: 24,
    backgroundColor: COLORS.grayies,
    height: 72,
    width: '85%',
    marginTop: 12,
    borderRadius: 10,
  },
  nextOptionView: {
    marginTop: 32,
    marginHorizontal: 24,
  },
  paypalText: {
    fontFamily: FONTFAMILY.Montserrat_Bold,
    fontSize: FONTSIZE.size_16,
  },
  paypalCardView: {
    marginTop: 15,
    backgroundColor: COLORS.grayies,
    height: 72,
    width: '96%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInsideCard: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    marginVertical: 25,
    marginLeft: 12,
  },
});
