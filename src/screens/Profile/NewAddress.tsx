import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons} from '../../utils/icons';
import {SvgXml} from 'react-native-svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';
import TextInputCard from '../../common/TextInputCard';

interface NewAddressProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'newaddress'>;
}
const NewAddress = ({navigation}: NewAddressProps) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{marginTop: 63, marginHorizontal: 27, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={icons().back} />
          </TouchableOpacity>
          <View style={{marginTop: 11}}>
            <Text style={styles.addressText}>Add Address</Text>
          </View>
        </View>
        <TextInputCard
          placeHolder="Street Address"
          textinputstyle={styles.textInput}
          boxstyle={styles.inputBox}
        />
        <TextInputCard
          placeHolder="City"
          textinputstyle={styles.textInput}
          boxstyle={styles.inputBoxName}
        />
        <View style={{flexDirection: 'row'}}>
          <TextInputCard
            placeHolder="State"
            boxstyle={styles.inputBoxState}
            textinputstyle={styles.textInput}
          />
          <TextInputCard
            placeHolder="Zip Code"
            boxstyle={styles.inputBoxZip}
            textinputstyle={styles.textInput}
            keyboardtype={'numeric'}
          />
        </View>
      </ScrollView>
      <View style={styles.saveButtonView}>
        <TouchableOpacity>
          <View style={styles.saveButton}>
            <Text style={styles.saveText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewAddress;

const styles = StyleSheet.create({
  addressText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    marginHorizontal: 97,
  },
  textInput: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_16,
    textAlignVertical: 'center',
    marginLeft: 12,
    color: COLORS.purple,
  },
  inputBox: {
    marginHorizontal: 24,
    width: '86%',
    marginTop: 32,
    justifyContent: 'center',
  },
  inputBoxName: {
    marginHorizontal: 24,
    width: '86%',
    marginTop: 12,
    justifyContent: 'center',
  },
  inputBoxState: {
    marginLeft: 24,
    width: '40%',
    marginTop: 12,
    justifyContent: 'center',
  },
  inputBoxZip: {
    width: '40%',
    marginTop: 12,
    justifyContent: 'center',
    marginLeft: 20,
  },
  saveButtonView: {
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 0,
  },
  saveButton: {
    backgroundColor: COLORS.purple,
    width: 342,
    height: 52,
    marginVertical: 14,
    marginHorizontal: 24,
    borderRadius: 35,
    justifyContent: 'center',
  },
  saveText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    color: COLORS.white,
  },
});