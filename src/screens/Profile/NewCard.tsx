  import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
  import React from 'react';
  import {NativeStackNavigationProp} from '@react-navigation/native-stack';
  import {RootStackParams} from '../../navigation/AppNavigator';
  import {SvgXml} from 'react-native-svg';
  import {icons} from '../../utils/icons';
  import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import TextInputCard from '../../common/TextInputCard';

  interface NewCardProps {
    navigation: NativeStackNavigationProp<RootStackParams, 'newcard'>;
  }
  const NewCard = ({navigation}: NewCardProps) => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{marginTop: 63, marginHorizontal: 27, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={icons().back} />
          </TouchableOpacity>
          <View style={{marginTop: 11}}>
            <Text style={styles.addressText}>Add Card</Text>
          </View>
        </View>

        <TextInputCard
          placeHolder="Card Number"
          boxstyle={styles.inputBox}
          textinputstyle={styles.textInput}
        />
        <View style={{flexDirection: 'row'}}>
          <TextInputCard
            placeHolder="CVV"
            boxstyle={styles.inputBoxCvv}
            textinputstyle={styles.textInput}
            secureTextEntry={true}
            keyboardtype={'numeric'}
          />
          <TextInputCard
            placeHolder="Exp"
            boxstyle={styles.inputBoxCvv}
            textinputstyle={styles.textInput}
          />
        </View>
        <TextInputCard
          placeHolder="Cardholder Name"
          boxstyle={styles.inputBoxName}
          textinputstyle={styles.textInput}
        />
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

  export default NewCard;

  const styles = StyleSheet.create({
    addressText: {
      fontSize: FONTSIZE.size_14,
      fontFamily: FONTFAMILY.Montserrat_ExtraBold,
      marginHorizontal: 97,
    },
    inputBox: {
      marginHorizontal: 24,
      width: '86%',
      marginTop: 32,
      justifyContent: 'center',
    },
    textInput: {
      fontFamily: FONTFAMILY.Montserrat_Regular,
      fontSize: FONTSIZE.size_16,
      textAlignVertical: 'center',
      marginLeft: 12,
      color: COLORS.purple,
    },
    inputBoxCvv: {
      marginLeft: 24,
      width: '40%',
      marginTop: 12,
      justifyContent: 'center',
    },
    inputBoxName: {
      marginHorizontal: 24,
      width: '86%',
      marginTop: 12,
      justifyContent: 'center',
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
