import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';
import NavHeader from '../../common/NavHeader';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';

interface AdrressProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'address'>;
}

const AddressCard = ({onPress}: any) => {
  return (
    <View style={styles.mainViewBox}>
      <Text style={styles.addressTextMain}>
        2715 Ash Dr. San Jose, South...
      </Text>
      <TouchableOpacity>
        <Text style={styles.editButton}>Edit </Text>
      </TouchableOpacity>
    </View>
  );
};
const AddressCard1 = ({onPress}: any) => {
  return (
    <View style={styles.mainViewBox1}>
      <Text style={styles.addressTextMain}>
        2715 Ash Dr. San Jose, South...
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.editButton}>Edit </Text>
      </TouchableOpacity>
    </View>
  );
};
const Address = ({navigation}: AdrressProps) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginTop: 63, marginHorizontal: 27, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={icons().back} />
        </TouchableOpacity>
        <View style={{marginTop: 11}}>
          <Text style={styles.addressText}>Address</Text>
        </View>
      </View>
      <AddressCard />
      <AddressCard1 onPress={() => navigation.navigate('newaddress')} />
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({
  mainViewBox: {
    marginTop: 42,
    backgroundColor: COLORS.grayies,
    height: 72,
    width: '90%',
    marginHorizontal: 24,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    marginHorizontal: 97,
  },
  addressTextMain: {
    marginTop: 28,
    marginLeft: 17,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_14,
  },
  editButton: {
    marginVertical: 29,
    marginRight: 29,
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    color: COLORS.purple,
  },
  mainViewBox1: {
    marginTop: 12,
    backgroundColor: COLORS.grayies,
    height: 72,
    width: '90%',
    marginHorizontal: 24,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
