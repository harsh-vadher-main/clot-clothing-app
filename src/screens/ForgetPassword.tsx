import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/Theme';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonCommon from '../common/ButtonCommon';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigator';

interface ForgetPasswordProp {
  navigation: NativeStackNavigationProp<RootStackParams, 'forgetpassword'>;
}

const ForgetPassword = ({navigation}: ForgetPasswordProp) => {
  const [email, setEmail] = useState<any>('');
  const [error, setError] = useState<any>({email: ''});

  const validateEmail = () => {
    let isValid = true;
    let newErrors = {email: ''};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address.';
      isValid = false;
    }
    setError(newErrors);
    return isValid;
  };

  const handleSignUp = () => {
    if (validateEmail()) {
      console.log('Harsh');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <SvgXml
          xml={icons().back}
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.topText}>Forgot Password</Text>
        <View style={styles.inputView}>
          {error.email ? (
            <Text style={styles.errorEmail}>{error.email}</Text>
          ) : null}
          <TextInput
            placeholder="Enter Email address"
            placeholderTextColor={'#27272780'}
            style={styles.textInput}
            onChangeText={setEmail}
          />
          <TouchableOpacity onPress={handleSignUp}>
            <ButtonCommon
              name="Continue"
              textStyle={styles.btnText}
              viewStyle={styles.btnView}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  backIcon: {
    marginTop: 63,
    marginLeft: 27,
  },

  topText: {
    fontSize: FONTSIZE.size_32,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    lineHeight: 34,
    marginTop: 20,
    marginLeft: 27,
    color: '#272727',
  },
  btnText: {
    fontSize: FONTSIZE.size_18,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTFAMILY.Montserrat_Medium,
  },
  btnView: {
    backgroundColor: COLORS.purple,
    width: '100%',
    padding: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_25,
  },
  inputView: {
    marginTop: 35,
    marginHorizontal: 23,
    gap: 16,
  },
  errorEmail: {
    color: 'red',
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },

  textInput: {
    width: '100%',
    height: 56,
    borderRadius: 6,

    backgroundColor: '#f4f4f4',
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    color: COLORS.black,
  },
  dontText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  createText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
  signUpView: {
    paddingTop: 71,
    marginHorizontal: 23,
    gap: 12,
  },
  appleView: {
    flexDirection: 'row',
    marginTop: 71,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grayies,
    borderRadius: BORDERRADIUS.radius_25,
    gap: 12.15,
  },
  googleView: {
    flexDirection: 'row',
    height: 49,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grayies,
    borderRadius: BORDERRADIUS.radius_25,
    gap: 12.15,
  },
  facebookView: {
    flexDirection: 'row',
    height: 49,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grayies,
    borderRadius: BORDERRADIUS.radius_25,
    gap: 12.15,
  },
  appleText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    textAlign: 'center',
  },
  svgIconApple: {
    position: 'absolute',
    left: 20,
    bottom: 15,
  },
});
