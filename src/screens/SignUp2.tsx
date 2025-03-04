import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ButtonCommon from '../common/ButtonCommon';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/Theme';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigator';

interface signup2Props {
  navigation: NativeStackNavigationProp<RootStackParams, 'SignUp2'>;
}
const SignUp2 = ({navigation}: signup2Props) => {
  const [password, setPassword] = useState<any>('');

  const [error, setError] = useState<any>({password: ''});

  const validateEmail = () => {
    let isValid = true;
    let newErrors = {password: ''};

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password should contain atleast 6 charactor.';
      isValid = false;
    }
    setError(newErrors);
    return isValid;
  };

  const handleSignUp = () => {
    if (validateEmail()) {
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Text style={styles.topText}>Sign in</Text>
        <View style={styles.inputView}>
          {error.password ? (
            <Text style={styles.errorPassword}>{error.password}</Text>
          ) : null}
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#27272780'}
            style={styles.textInput}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity onPress={handleSignUp}>
            <ButtonCommon
              name="Continue"
              textStyle={styles.btnText}
              viewStyle={styles.btnView}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('forgetpassword')}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 16,
              }}>
              <Text style={styles.dontText}>Forgot Password?</Text>
              <Text style={styles.createText}>Reset</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp2;

const styles = StyleSheet.create({
  topText: {
    fontSize: FONTSIZE.size_32,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    lineHeight: 34,
    marginTop: 123,
    left: 27,
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
    marginTop: 32,
    marginHorizontal: 23,
    gap: 16,
  },
  errorPassword: {
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
